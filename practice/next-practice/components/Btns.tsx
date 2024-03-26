"use client";

import { useRouter } from "next/navigation"

export function Btns(){
    const router = useRouter();
    return <> 
    <div className="flex gap-5 p-4 justify-center">
        <button className="p-4 bg-slate-800 text-white rounded-lg" onClick={()=>router.push('/')}>Home</button>
        <button className="p-4 bg-slate-800 text-white rounded-lg" onClick={()=>router.push('/about')}>About</button>
    </div>
    </>
}