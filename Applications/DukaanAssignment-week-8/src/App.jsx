import Header from "./component/Header"
import Sidebar from "./component/Sidebar/Sidebar"
import MainSection from "./component/main/MainSection"

function App() {
  return (
    <>
    <div className="flex">
      <div className="hidden md:block w-64  h-dvh bg-black">
      <Sidebar/>
      </div>
      <div className="w-full">  
        <Header title={"Payouts"}/>
        <MainSection/>
      </div>
    </div>
    </>
  )
}

export default App
