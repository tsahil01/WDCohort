import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello there,
      <button className="p-5 border bg-slate-400"><Link href={"/signup"}>Signup</Link></button>
      <button className="p-5 border bg-slate-400"><Link href={"/signin"}>Signin</Link></button>
    </div>
  );
}
