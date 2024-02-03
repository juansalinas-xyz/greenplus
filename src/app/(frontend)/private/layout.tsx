interface Props {
  children: React.ReactNode;
}
async function PrivateLayout({ children }: Props) {
  return (
    <div>
      <h1>Nav private</h1>
      {children}
    </div>
  );
}
export default PrivateLayout;
