import { serve } from "bun";

serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);

    // Match /join/:code
    if (url.pathname.startsWith("/join/")) {
      const code = url.pathname.split("/")[2];
      if (!code) {
        return new Response("Missing game code", { status: 400 });
      }
      // Redirect to Gimkit join URL
      return Response.redirect(`https://www.gimkit.com/join/${code}`, 302);
    }

    // Default fallback
    return new Response("Hello! Use /join/:code to redirect to Gimkit.");
  },
});