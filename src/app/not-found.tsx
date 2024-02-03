import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>URL invalido</p>
      <Link href="/">
        <button className="border-slate-600 border-2">Click para volver a Home</button>
      </Link>
    </div>
  );
}
