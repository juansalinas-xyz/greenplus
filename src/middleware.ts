import { PrivateRoutes } from "@utilities/private-routes.utility";
import { NextRequest, NextResponse } from "next/server";

const redirectPath = (path: string, req: NextRequest) => {
  const absoluteURL = new URL(path, req.url);
  return NextResponse.redirect(absoluteURL);
};

let response = NextResponse.next();

let protectedRoutes = Object.values(PrivateRoutes);

const user = { id: true };

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // If user no logged want to go private routes
  if (!user.id && protectedRoutes.includes(pathname)) {
    response = redirectPath("/login", req);
  }

  return response;
}
