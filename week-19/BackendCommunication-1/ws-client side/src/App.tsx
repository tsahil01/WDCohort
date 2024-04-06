import { useEffect, useState } from "react"

export default function App(){
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(()=>{
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () =>{
      console.log("Connection established");
      newSocket.send("Hello from Client!");
    }
    newSocket.onmessage = (message) =>{
      console.log("Msg Recvd: ", message.data);
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  return <>
  Hello
  </>
}