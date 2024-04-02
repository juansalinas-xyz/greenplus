import { ubuntu } from "src/app/fonts";

export default function StoreLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <section className={`${ubuntu.className} bg-gray-100 overflow-x-hidden`}>{children}</section>;
  }