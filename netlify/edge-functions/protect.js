export default async (request, context) => {
  const authHeader = request.headers.get("authorization");

  // Set your desired username and password here
  const username = "bujji";
  const password = "love";

  // Create the expected Basic Auth header
  const expectedAuth = "Basic " + btoa(`${username}:${password}`);

  if (authHeader !== expectedAuth) {
    // If credentials don't match, prompt the browser for a password
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Birthday Card"'
      }
    });
  }

  // If credentials match, serve the requested page/image normally
  return context.next();
};

// This configuration tells Netlify to run this function for ALL pages and images
export const config = {
  path: "/*"
};
