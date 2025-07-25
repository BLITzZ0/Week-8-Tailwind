
import './App.css'

function App() {

  return (
    <div >
      <Flexboxes/>
      <Grids/>
      <Responsiveness/>
    </div>
  )
}

function Flexboxes(){

  return(
    <div className='flex justify-around'>
      <div className='bg-red-500'>div 1</div>
      <div className='bg-yellow-500'>div 2</div>
      <div className='bg-green-500'>div 3</div>
    </div>
  )
}

function Grids(){
  return(
    <div className='grid grid-cols-10'>
      <div className='bg-red-500 col-span-4' >div 1</div>
      <div className='bg-yellow-500 col-span-4'>div 2</div>
      <div className='bg-green-500 col-span-2'>div 3</div>
    </div>
  )
}

function Responsiveness(){
  return(
    // by default the div color is blue but as soon as it reachst he breakpoint for the 
    // medium screen size md div color changes to red.

    <div className='grid grid-cols-1 bg-blue-500 md:bg-red-500 sm:grid-cols-3'>
      <div className='bg-green-500'>Div 1</div>
      <div className='bg-yellow-500'>Div 2</div>
      <div className='bg-red-500'>Div 3</div>
    </div>
  )
}
export default App
