import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(async function RootLayout() {
	return (
    <div>Dashboard</div>
	);
})
