import './App.css'
import { RevenuCard } from './component/RevenueCard'

function App() {

  return (
    <>
      <div className='grid grid-cols-3'>
        <RevenuCard title={"Amount pending"} amount = {9000} orderCount={13}></RevenuCard>
      </div>
    </>
  )
}

export default App
