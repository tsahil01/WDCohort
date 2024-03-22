import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(){
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/USER" element={<User/>} />
    </Routes>
  </BrowserRouter>
  
  </>
}


function Home(){
  return <>
  <h1>On home</h1>
  </>
}
function Signup(){
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  async function sendData() {
    const res = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name
      })
    });
    const data = await res.json();
    console.log(data);
  }

  return <>
  <h1>On Signup</h1>
  <input type="text" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)}/>
  <input type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
  <button onClick={()=>{
    sendData()
  }}>Signup</button>
  </>
}


function User(){
  async function getuser() {
    const res = await fetch('http://localhost:4000/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    console.log(data);
  }
  getuser();
  return <>
  <h1>On User</h1>
  </>
}