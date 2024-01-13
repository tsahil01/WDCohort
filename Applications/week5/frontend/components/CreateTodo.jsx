import { useState } from "react";

function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return <div>

        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value
            setTitle(e.target.value)
        }}/> <br></br>

        <input type="text" style={{
            padding: 10,
            margin: 10
        }} placeholder="description" onChange={function(e){
            setDescription(e.target.value)
        }}/> <br></br>

        <button style={{
            padding: 10,
            margin: 10
        }} oncClick = {()=>{
            fetch("http://localhost:4000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title ,
                    description: description 
                }),
                headers: {
                    "contentType": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo added")
            })

        }}> Add a todo</button>

    </div>
}

export default CreateTodo