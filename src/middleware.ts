import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // Define public routes that don't require authentication
// const isPublicRoute = createRouteMatcher([
//   "/sign-in(.*)",
//   "/sign-up(.*)",
//   "/api(.*)", // Adjust based on your needs
// ]);

// export default clerkMiddleware((auth, req) => {
//   console.log("Middleware triggered for:", req.url);
//   if (!isPublicRoute(req)) {
//     auth().protect(); // Protect non-public routes
//   }
// });

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)", "/(api|trpc)(.*)"],
// };