"use client"
import { PrivateRoutes } from "../../_models/private-routes.enum";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  client: React.ReactNode;
  admin: React.ReactNode;
}
 function DashboardLayout({ children, client, admin }: Props) {
  const { user } = useUser();
  const role = {
    client: true,
    admin: false,
  };

  return (
    <div>
      <h1>Nav dash</h1>
      <h2>User: { user?.email }</h2>
      {user?.picture && <Image src={ user?.picture } alt={`Profile ${user?.name || user?.nickname}`} width={50} height={50} />}
      <Link href={`/${PrivateRoutes.DASHBOARD}`}>
        <button className="border-slate-600 border-2">Dashboard</button>
      </Link>
      <Link href={`/${PrivateRoutes.PROFILE}`}>
        <button className="border-slate-600 border-2">Profile</button>
      </Link>
      <a href="/api/auth/logout">Logout</a>
      {/* <button onClick={}>Logout</button> */}
      {children}
      {role.client && client}
      {role.admin && admin}
    </div>
  );
}
export default DashboardLayout;
