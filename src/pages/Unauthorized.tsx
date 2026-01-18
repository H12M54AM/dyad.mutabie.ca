import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-extrabold text-primary">403</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-text-primary">
            Access Denied
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            You don't have permission to view this page.
          </p>
        </div>
        
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Go back home
          </Link>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-text-secondary">
            If you believe this is an error, please{' '}
            <a href="mailto:support@example.com" className="font-medium text-primary hover:text-primary-hover">
              contact support
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}