import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();
        const expectedPassword = process.env.APP_ACCESS_PASSWORD;

        if (!expectedPassword) {
            return NextResponse.json(
                { error: 'Server configuration error: Password not set' },
                { status: 500 }
            );
        }

        if (password === expectedPassword) {
            const cookieStore = cookies();

            // Set cookie for 7 days
            cookieStore.set('app-access', password, {
                maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
            });

            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json(
                { error: 'Incorrect password' },
                { status: 401 }
            );
        }
    } catch {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}
