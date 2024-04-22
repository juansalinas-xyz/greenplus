import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[75vh] w-full items-center justify-center flex-col text-center text-black font-bold">
      <h1 className="text-xl font-black text-green_greenplus">GREEN PLUS</h1>
      <h2 className="mt-3 mb-1">Page Not Found</h2>
      <p>URL invalido - Corrobora el enlace ingresado</p>
      <Link href="/">
        <button className=" border-2 mt-5 rounded-2xl p-2 bg-green_greenplus text-white hover:bg-green-700 transition-all duration-300">Click para volver a Home</button>
      </Link>
    </div>
  );
}
