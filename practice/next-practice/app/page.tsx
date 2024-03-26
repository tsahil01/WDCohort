"use client";

import axios from "axios"


export default async function App(){
  return <>
  <h1 className="text-6xl">Hello World</h1>
  <div>{JSON.stringify(await getUserDetails())}</div>
  <button onClick={async ()=> await sendData()}>Send</button>
  {/* {await sendData()} */}
  </>
}

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}

async function sendData() {
  await axios.post("http://localhost:3000/api/user", {
    msg: "Hello world how are oyu"
  });
}