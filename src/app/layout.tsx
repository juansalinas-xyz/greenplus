import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import ThemeRegistry from "../theme/themeRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Green Plus",
  description: "Construye un futuro sostenible con Green Plus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
				<UserProvider>
					<body className={`${inter.className} bg-gray-100`}>{children}</body>
				</UserProvider>
      </ThemeRegistry>
    </html>
  );
}
