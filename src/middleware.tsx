import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: ['/', '/about', '/home', '/blog'], // paths on which middleware will work
}

export function middleware(request: NextRequest) {
    const locale = request.cookies.get('DEFAULT_LOCALE')?.value || 'pt'
    //  console.log('locale: ', locale)
    //  console.log('request.nextUrl.locale: ', JSON.parse(JSON.stringify(request.nextUrl.locale)))
    if (locale !== undefined && request.nextUrl.locale !== locale) {
        return NextResponse.redirect(
            new URL(`/${locale}${request.nextUrl.pathname}`, request.url)
        )
    }

    return NextResponse.next()
}