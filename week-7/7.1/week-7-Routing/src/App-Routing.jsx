import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Landing from "./component/Landing"
import About from "./component/About"

function AppRouting() {
  return<>
  <div>I am HEader</div>
  <BrowserRouter>
  <Btns/>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </BrowserRouter>
  </>
}

function Btns(){
  const navigate = useNavigate();
  return <>
  <button onClick={()=>{
    navigate('/')
  }}>Landing Page</button>
  <button onClick={()=>{
    navigate('/about')
  }}>About Page</button>
  </>
}

export default AppRouting
