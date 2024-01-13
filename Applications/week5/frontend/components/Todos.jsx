function Todos({todos}){ // todos will be an array

    return <div>
        {todos.map( function ( todo ) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true? "Completed" : "Mark as Completed" }</button>
            </div>
        })}

    </div>
}

export default Todos