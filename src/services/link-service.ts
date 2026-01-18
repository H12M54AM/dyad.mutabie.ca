import { isAllowedExternalLink } from "@/config/external-links";

export class LinkService {
  static openExternalLink(url: string): void {
    // Validate the URL before opening
    if (!isAllowedExternalLink(url)) {
      console.warn("Blocked attempt to open untrusted external link:", url);
      return;
    }

    // Log the external link opening for monitoring
    console.log("Opening external link:", url);

    // Open in a new tab with security attributes
    window.open(url, "_blank", "noopener,noreferrer");
  }
}