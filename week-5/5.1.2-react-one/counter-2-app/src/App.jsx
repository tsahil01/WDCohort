import React, { useState } from 'react';

// ToDo app==>
// State of Todo can be:
// {
// todos: [{title: "todo1", description: "first todo", complete: false}]
// }

function App() {

  const[todo, setTodo] = useState([{
    title: "Go to gym",
    description: "10-1",
    complete: true
  }, {
    title: "DSA",
    description: "19-21",
    complete: false
  }]);

  function newTodos(){
    setTodo([...todo, {
      title: "Dev",
      description: "19-21",
      complete: true
    }])
  }

  return (
    <div>
     {/* {JSON.stringify(todo)} // we need to convert js object to string. */}

     <button onClick={newTodos}>Click to get new todo</button>
     {todo.map(function(todo){
      return <Todo title = {todo.title} description = {todo.description}></Todo>
     })}
    </div>
  )
}

// new Component
function Todo(props){ // takes single todo
  return <div>
    <h1> {props.title} </h1>
    <h2> {props.description} </h2>
  </div>
}

export default App
