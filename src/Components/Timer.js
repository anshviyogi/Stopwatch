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

    useEffect(()=>{
    let interval = null;

    // Condition for minutes
    if(seconds === 60){
        setMinutes(minutes + 1)
        setSeconds(0)
    }

        if(isRunning){
            interval = setInterval(()=>{
                setSeconds(prvValue => prvValue + 1)
            },1000)
        }else{
            clearInterval(interval)
        }

        // Returning
        return ()=> clearInterval(interval)
    })

    // Functions

    // Splitting time
    const startHandler = ()=>{
        setIsRunning(prevValue => !prevValue)
    }

    const splitHandler = ()=>{
        // List of data @save -- localStorage
        const timeArray = JSON.parse(localStorage.getItem('time') || "[]")

        // Object data for splitting
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
        {/* Minutes Ticking */}
        <h1 className='stopwatch-time'>{minutes<=9 ? "0" + minutes: minutes}
        <span className='stopwatch-text'>{minutes<=1 ? "Minute" : "Minutes"}</span>
        :</h1>

        {/* Seconds Tiking */}
        <h1 className='stopwatch-time'>{seconds<=9 ? "0" + seconds: seconds}
        <span className='stopwatch-text'>{seconds <=1 ? "Second" : "Seconds"}</span></h1>
    </div>

    {/* Buttons */}
    <button className='stopwatch-buttons' onClick={startHandler}>{isRunning ? "Pause" : "Start"}</button>
    <br/>
    <button className='stopwatch-buttons' onClick={splitHandler}>Split</button>
    <br/>
    <button className='stopwatch-buttons' onClick={resetHandler}>Reset</button>

    </>
  )
}

export default React.memo(Timer)