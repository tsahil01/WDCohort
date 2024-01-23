import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import './App.css'
import { filterSelector, searchAtom, todoAtom } from './sources/atoms/todos';

function App() {
  return<>
  <RecoilRoot>
    <CreateTodos/>
    {/* <GetTodo/> */}
    <SearchTodo/>
    <div>
      Search Todo:
      <div>
        <GetSearchTodo/>
      </div>
    </div>
  </RecoilRoot>
  </>
}


function CreateTodos(){
  const setTodo = useSetRecoilState(todoAtom)
  let text;
  return<>
  <input type="text" onChange={(e)=>{
    text = e.target.value
  }} placeholder='Enter todo' />

  <button onClick={()=>{
    setTodo((prevState) => [...prevState, text])
  }}>Add Todo</button>
  </>
}

function SearchTodo(){
  const setSearchTodo = useSetRecoilState(searchAtom)
  return<>
  <input type="text" name="" id=""  onChange={(e)=>{
    setSearchTodo(e.target.value)
  }}/>
  </>
}

function GetSearchTodo(){
  const searchTodo = useRecoilValue(filterSelector)
  return<>
  {searchTodo.map((d)=>{
    return <h1>{d}</h1>
  })}
  </>
}

export default App
