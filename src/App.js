import React, { useEffect } from 'react'
import './App.css'
import SplitTable from './Components/SplitTable'
import Timer from './Components/Timer'

function App() {
    // OnLoad of page remove all the tasks
    useEffect(()=>{
      localStorage.removeItem('time')
    },[])

  return (
    <div className='App'>
      <Timer/>
      <SplitTable/>
    </div>
  )
}

export default App