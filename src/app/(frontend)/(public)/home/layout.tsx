export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-gray-100">{children}</section>;
}
