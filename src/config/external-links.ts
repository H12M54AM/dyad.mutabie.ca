export const EXTERNAL_LINKS = {
  MUTABIE_CONTACT: "https://mutabie.ca/contact/",
  MUTABIE_HOME: "https://mutabie.ca",
  DYAD_HOME: "https://www.dyad.sh/",
} as const;

// Whitelist of allowed external URLs
const ALLOWED_EXTERNAL_URLS = Object.values(EXTERNAL_LINKS);

export const isAllowedExternalLink = (url: string): boolean => {
  try {
    // Check if the URL is in our whitelist
    return ALLOWED_EXTERNAL_URLS.some(allowedUrl => 
      url === allowedUrl || url.startsWith(allowedUrl)
    );
  } catch {
    return false;
  }
};