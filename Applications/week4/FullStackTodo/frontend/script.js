const todoDiv = document.querySelector('.todo')

let globalId = 0;


function getbackendData(){
    let data;
    fetch('http://localhost:3000/getTodo').then((response)=> {
        response.text()
        .then((finalData)=> {
            data = JSON.parse(finalData)
            console.log(data)
        })
    })
}


function completeTodo(id){
    const task = todoDiv.childNodes[id-1]
    task.childNodes[1].innerHTML = "<b>DONE with the task</b>"
    task.childNodes[2].remove()

}

function createTodo(){
    const title = document.querySelector('.title').value
    const description = document.querySelector('.description').value

    const titleDiv = document.createElement('div')
    const titleText = document.createTextNode(title)
    titleDiv.appendChild(titleText)

    const descriptionDiv = document.createElement('div')
    const descriptionText = document.createTextNode(description)
    descriptionDiv.appendChild(descriptionText)

    const markDoneBtn = document.createElement('button')
    markDoneBtn.innerHTML = "Mark as done"

    const task = document.createElement('div')
    task.append(titleDiv, descriptionDiv, markDoneBtn)
    task.setAttribute('id', ++globalId)

    markDoneBtn.setAttribute("onclick", `completeTodo(${globalId})`)

    todoDiv.appendChild(task)
}
