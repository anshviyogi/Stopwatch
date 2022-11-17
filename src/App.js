import React, { useEffect } from 'react'
import './App.css'
import SplitTable from './Components/SplitTable'
import Timer from './Components/Timer'
function App() {
  
  return (
    <div className='App'>
      <Timer/>
      <SplitTable/>
    </div>
  )
}

export default App