import { roboto } from "src/app/fonts";

function Dashboard2Layot({ children }: { children: React.ReactElement }) {
  return (
    <div  className={`${roboto.className} text-black bg-white overflow-hidden`}>
      {children}
    </div>
  );
}
export default Dashboard2Layot;
