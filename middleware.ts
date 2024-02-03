import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Auth", "token");

  const response = NextResponse.next({
    headers: requestHeaders,
  });

  // const user = { id: "null" };

  // if (user.id) {
  if (request.nextUrl.pathname.endsWith("/private")) {
    return NextResponse.redirect(new URL("/private/dashboard", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/private/dashboard", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.rewrite(
      new URL("/private/dashboard/profile", request.url)
    );
  } else {
    if (request.nextUrl.pathname.includes("/private")) {
      return NextResponse.redirect(new URL("/public/login", request.url));
    }
  }
  // }

  if (request.nextUrl.pathname.endsWith("/public")) {
    return NextResponse.redirect(new URL("/private/dashboard", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/home")) {
    return NextResponse.rewrite(new URL("/public/home", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.rewrite(new URL("/public/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/register")) {
    return NextResponse.rewrite(new URL("/public/register", request.url));
  }

  return response;
}
