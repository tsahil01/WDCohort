import Link from "next/link";

export function Navbar(){
    return <>
    <div className="p-7 flex flex-row gap-4 justify-center bg-slate-400">
        <Link href={"/"}><button className="p-3 rounded-lg bg-slate-200">Home</button></Link>
        <Link href={"/static-page"}><button className="p-3 rounded-lg bg-slate-200 ">Static-Page</button></Link>
        <Link href={"/interactive-page"}><button className="p-3 rounded-lg bg-slate-200 ">Interactive-Page</button></Link>
    </div>
    </>
}