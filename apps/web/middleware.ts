import {
  clerkMiddleware,
  createRouteMatcher,
  createClerkClient,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/onboarding"]);
const isDashboardRoute = createRouteMatcher(["/dashboard(.*)"]);
const isOnboardingRoute = createRouteMatcher(["/onboarding"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const clerkClient = createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    // Protect the route first
    const { userId, sessionClaims } = await auth.protect();
    const user = await clerkClient.users?.getUser(userId);

    // Get user's public metadata
    const publicMetadata = user.publicMetadata || {};
    const hasCompletedOnboarding =
      (publicMetadata as { onBoarding: boolean }).onBoarding === true;

    // If user is accessing dashboard but hasn't completed onboarding
    if (isDashboardRoute(req) && !hasCompletedOnboarding) {
      const onboardingUrl = new URL("/onboarding", req.url);
      return NextResponse.redirect(onboardingUrl);
    }

    // If user has completed onboarding but is trying to access onboarding page
    // ONLY redirect from onboarding page to dashboard, NOT from dashboard to dashboard
    if (isOnboardingRoute(req) && hasCompletedOnboarding) {
      // const dashboardUrl = new URL("/dashboard", req.url);
      // return NextResponse.redirect(dashboardUrl);
    }

    // If user is on dashboard and has completed onboarding, allow access (no redirect needed)
    if (isDashboardRoute(req) && hasCompletedOnboarding) {
      // No redirect needed, just allow the request to continue
    }

    // If user is on onboarding and hasn't completed it, allow access
    if (isOnboardingRoute(req) && !hasCompletedOnboarding) {
      // No redirect needed, just allow the request to continue
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
