import Link from "next/link";
import { PrivateRoutes } from "@utilities/private-routes.utility";

interface Props {
  children: React.ReactNode;
  client: React.ReactNode;
  admin: React.ReactNode;
}
function DashboardLayout({ children, client, admin }: Props) {
  const role = {
    client: true,
    admin: false,
  };

  return (
    <div>
      <h1>Nav dash</h1>
      <Link href={PrivateRoutes.DASHBOARD}>
        <button className="border-slate-600 border-2">Dashboard</button>
      </Link>
      <Link href={PrivateRoutes.MY_PROFILE}>
        <button className="border-slate-600 border-2">Profile</button>
      </Link>

      {children}
      {role.client && client}
      {role.admin && admin}
    </div>
  );
}
export default DashboardLayout;