import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"], // Define which routes should be public
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"], // Apply middleware to all routes except static files
};
