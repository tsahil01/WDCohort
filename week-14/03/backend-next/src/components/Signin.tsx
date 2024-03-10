"use client"

import { signup } from "@/app/actions/user";
import axios from "axios";
import { useState } from "react"

export function Signin(){
    const [username, setUsername] = useState("");
    const [password, setPassowrd] = useState("");

    return <div className="flex justify-center flex-col gap-5 p-10 w-1/2 bg-slate-300 rounded-md m-5">
    <input className="p-4 rounded-md outline-none" type="text" placeholder="username" name="" id="" onChange={(e)=> setUsername(e.target.value)} />
    <input className="p-4 rounded-md outline-none" type="password" placeholder="password" name="" id=""  onChange={(e)=> setPassowrd(e.target.value)}/>
    <button className="p-5 bg-blue-600 rounded-lg"
    onClick={()=>{
        signup(username, password);
    }}>Signin</button>
</div>
}