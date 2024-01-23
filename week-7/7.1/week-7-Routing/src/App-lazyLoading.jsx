import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

import { Suspense, lazy } from "react"

const Landing =  lazy(()=>import('./component/Landing')) 
const About = lazy(()=>import('./component/About')) 

function AppLazyLoading() {
  return<>
  <div>I am HEader</div>
  <BrowserRouter>
  <Btns/>
    <Routes>
      <Route path="/" element= {<Suspense fallback="loading....."> 
      <Landing/> 
      </Suspense>} />
      
      <Route path="/about" element={<Suspense fallback="loading..."> <About/> </Suspense>} />
    </Routes>
  </BrowserRouter>
  </>
}

function Loding(){
    return<>
    <h1>Loading Page</h1>
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

export default AppLazyLoading
