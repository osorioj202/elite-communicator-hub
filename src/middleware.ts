import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Public paths that don't require authentication
    const publicPaths = ['/login', '/manifest.json', '/favicon.ico', '/icon-', '/_next'];
    const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

    // Specifically exclude the verify-password API from protection to allow logging in
    const isVerifyApi = pathname === '/api/verify-password';

    if (isPublicPath || isVerifyApi) {
        return NextResponse.next();
    }

    const authCookie = request.cookies.get('app-access')?.value;
    const expectedPassword = process.env.APP_ACCESS_PASSWORD;

    // If no password is set in environment, we might want to warn or allow
    // But for security, if it's supposed to be protected, we should redirect
    if (!authCookie || authCookie !== expectedPassword) {
        // Only redirect if it's not a public path and not already on login page
        if (pathname !== '/login') {
            const url = new URL('/login', request.url);
            // Store the attempted URL to redirect back after login? 
            // For now, simple redirect
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    // Match all paths except static files and public assets
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/verify-password (handled in logic above but explicit here is safer)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api/verify-password|_next/static|_next/image|favicon.ico).*)',
    ],
};
