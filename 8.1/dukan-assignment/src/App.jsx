import RevenueCard from './components/RevenueCard'
import './App.css'

function App() {

  return (
    <div className='grid grid-cols-4'>
      <RevenueCard title={"Amount Pending"} OrderCount={12} amount = {"23457"}/>
    </div>
  )
}

export default App
