export const EXTERNAL_LINKS = {
  MUTABIE_CONTACT: "https://mutabie.ca/contact/",
  MUTABIE_HOME: "https://mutabie.ca",
  DYAD_HOME: "https://www.dyad.sh/",
} as const;

export const isAllowedExternalLink = (url: string): boolean => {
  const allowedDomains = [
    "mutabie.ca",
    "dyad.sh"
  ];
  
  try {
    const urlObj = new URL(url);
    return allowedDomains.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
};