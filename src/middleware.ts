import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  // Add other public routes here if you have any, e.g., "/", "/about"
]);

export default clerkMiddleware((auth, req) => {
  // Protect all routes except public ones
  if (!isPublicRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    // Match all routes except static files (which have a file extension) and _next internal paths.
    // This effectively covers all your pages and client-side navigations.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Also explicitly match the root route, just in case.
    "/",
  ],
};