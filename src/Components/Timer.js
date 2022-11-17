import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import splitAction from '../Redux/actions/splitAction'
import './Timer.css'

function Timer() {
    // States management
    const[minutes,setMinutes] = useState(0)
    const[seconds,setSeconds] = useState(0)
    const[isRunning,setIsRunning] = useState(false)
    
    // Sending LocalStorage data in Redux
    const dispatch = useDispatch()
    dispatch(splitAction(JSON.parse(localStorage.getItem('time'))))

    // OnLoad of page remove all the tasks
    useEffect(()=>{
        localStorage.removeItem('time')
    },[])

    useEffect(()=>{
    let interval = null;

    // Condition for minutes
    if(seconds === 59){
        setMinutes(minutes + 1)
        setSeconds(0)
    }

        if(isRunning){
            interval = setInterval(()=>{
                setSeconds(seconds + 1)
            },1000)
        }else{
            clearInterval(interval)
        }

        // Returning
        return ()=> clearInterval(interval)
    })

    // Functions

    // Splitting time
    const splitHandler = ()=>{
        // List of data
        // @save -- localStorage

        const timeArray = JSON.parse(localStorage.getItem('time') || "[]")

        const timings = {
            minutes,
            seconds
        }

        timeArray.push(timings)
        localStorage.setItem('time',JSON.stringify(timeArray))
    }

    // Reset time 
    const resetHandler = ()=>{
        localStorage.removeItem('time')
        setMinutes(0)
        setSeconds(0)
        setIsRunning(false)
    }

  return (
    <>
    <div className='timer'>
        <h1 className='stopwatch-time'>{minutes<9 ? "0" + minutes: minutes}<span className='stopwatch-text'>Minutes</span>:</h1>
        <h1 className='stopwatch-time'>{seconds<9 ? "0" + seconds: seconds} <span className='stopwatch-text'>Seconds</span></h1>
    </div>

    {/* Buttons */}
    <button className='stopwatch-buttons' onClick={()=> setIsRunning(!isRunning)}>{isRunning ? "Pause" : "Start"}</button>
    <br/>
    <button className='stopwatch-buttons' onClick={splitHandler}>Split</button>
    <br/>
    <button className='stopwatch-buttons' onClick={resetHandler}>Reset</button>
    </>
  )
}

export default Timer