"use client"

import { useState } from "react"

export function Interactive(){
    const [count, setCount] = useState(0);
    return <>
    <button className="p-4 bg-slate-500 rounded-md"
    onClick={()=>{setCount(count + 1)}}>Count {count}</button>
    </>
}