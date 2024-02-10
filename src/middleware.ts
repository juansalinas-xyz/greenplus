import { NextRequest, NextResponse } from "next/server";
import { PrivateRoutes } from "./utilities/private-routes";
import { PublicRoutes } from "./utilities/public-routes";

export default function middleware(req: NextRequest) {
  const response = NextResponse.next();

  let protectedRoutes = [];
  let freeRoutes = [];

  for (let route in PrivateRoutes) {
    protectedRoutes = [...protectedRoutes, PrivateRoutes[route]];
  }

  for (let route in PublicRoutes) {
    freeRoutes = [...freeRoutes, PublicRoutes[route]];
  }

  const user = { id: true };

  const { pathname } = req.nextUrl;

  const redirectPath = (path: string) => {
    const absoluteURL = new URL(path, req.url);
    return NextResponse.redirect(absoluteURL);
  };

  if (pathname === "/") return redirectPath(PrivateRoutes.DASHBOARD);

  // If user logged want to go public routes
  if (user.id && freeRoutes.includes(pathname)) {
    return redirectPath(PrivateRoutes.DASHBOARD);
  }

  // If user no logged want to go private routes
  if (!user.id && protectedRoutes.includes(pathname)) {
    return redirectPath(PublicRoutes.HOME);
  }

  return response;
}
