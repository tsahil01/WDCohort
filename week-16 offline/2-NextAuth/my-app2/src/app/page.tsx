"use client"
import { useSession } from "next-auth/react";
import { Appbar } from "@/components/Appbar";

export default function App() {
  return <>
  <Appbar/> 
  <Home/>
  </>
}



export function Home() {
  const session = useSession();
  return (
    <div>
      {JSON.stringify(session.data?.user)}
    </div>
  );
}
