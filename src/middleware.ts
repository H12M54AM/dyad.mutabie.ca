import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting configuration
const RATE_LIMIT = 100; // requests
const TIME_WINDOW = 60 * 1000; // 1 minute in milliseconds

// Simple in-memory store for rate limiting (for demo purposes)
// In production, consider using Redis or Vercel KV
const requestCounts = new Map<string, { count: number; firstRequest: number }>();

export function middleware(request: NextRequest) {
  // Skip rate limiting for static assets
  if (request.nextUrl.pathname.startsWith('/_next/') ||
      request.nextUrl.pathname.startsWith('/favicon.ico') ||
      request.nextUrl.pathname.startsWith('/robots.txt')) {
    return NextResponse.next();
  }

  // Get client IP address
  const ip = (request as any).ip || request.headers.get('x-forwarded-for') || 'unknown';

  // Initialize or update request count
  const now = Date.now();
  const requestData = requestCounts.get(ip) || { count: 0, firstRequest: now };

  // Reset count if time window has passed
  if (now - requestData.firstRequest > TIME_WINDOW) {
    requestData.count = 1;
    requestData.firstRequest = now;
  } else {
    requestData.count++;
  }

  requestCounts.set(ip, requestData);

  // Check if rate limit exceeded
  if (requestData.count > RATE_LIMIT) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Content-Type': 'text/plain',
        'Retry-After': Math.ceil((TIME_WINDOW - (now - requestData.firstRequest)) / 1000).toString()
      }
    });
  }

  // Validate analytics consent cookie
  const consentCookie = request.cookies.get('analytics-consent');
  if (consentCookie && !['true', 'false'].includes(consentCookie.value)) {
    // Invalid consent value - remove it
    const response = NextResponse.next();
    response.cookies.delete('analytics-consent');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};