import React from 'react'
import {PlayArrow} from '@mui/icons-material/';
import {Pause} from '@mui/icons-material/';
import {Stop} from '@mui/icons-material/';

import { useState } from 'react';
import { useEffect } from 'react';
import './Work.css'
export default function Work({value}) {
    const [state,setState]=useState(false)
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerIntervalId, setTimerIntervalId] = useState(null)
  
    useEffect(() => {
      console.log(value);
      const start = new Date().getTime();
      setStartTime(start);
  
      const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const elapsed = now - start;
        setElapsedTime(elapsed);
      }, 1000);
      setTimerIntervalId(timerInterval)
  
       return () => {
        clearInterval(timerInterval);
      };
    }, []);
    
    const hours = Math.floor(elapsedTime / 3600000);
      const minutes = Math.floor((elapsedTime % 3600000) / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
   
  
      const playarrow = () => {
      setState(false);
      const start = new Date().getTime() - elapsedTime; 
      setStartTime(start);
  
      const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const elapsed = now - start;
      setElapsedTime(elapsed);
      }, 1000);
  
      setTimerIntervalId(intervalId);
  
      };
  
      const pause=()=>{
      clearInterval(timerIntervalId);
      setState(true)
      }
   
    const stop = () => {
      setElapsedTime(0);
      clearInterval(timerIntervalId);
      setState(true)
       };
  return (
    <>
    <section className="vh-100 bg-image" style={{"backgroundImage": "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">



   
    <div className='d-flex  justify-content-center mt-5'>
    <button type="button" class="btn btn-dark mr-2 p-3">{hours.toString().padStart(2, '0')}</button>
    <button type="button" class="btn btn-dark mr-2 p-3">{minutes.toString().padStart(2, '0')}</button>
    <button type="button" class="btn btn-dark p-3">{seconds.toString().padStart(2, '0')}</button>
    </div>
    <div className='d-flex justify-content-center mt-2'>
      {state===true?
      <button type="button" class="btn btn-success mr-2 "onClick={playarrow}><PlayArrow/></button>:
      <button type="button" class="btn btn-danger mr-2" onClick={pause}><Pause/></button>
       }
    <button type="button" class="btn btn-danger mr-2" onClick={stop}><Stop/> </button>
    </div>

<center><h3 className='mt-5'>{value}</h3></center>
      <div className="row align-items-center mt-5"> {/* Added align-items-center class here */}
        <div className="col-md-6 mb-4 ">
          <div className="card">
          <div className="card-header">
        <h3 className='text-center'>Total hours worked this week</h3>
         </div>
            <div className="card-body p-5">
              <h3 className="text-uppercase text-center mb-5">7 Hours</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4 ">
          <div className="card">
          <div className="card-header">
        <h3 className='text-center'>Total hours worked this month</h3>
         </div>
            <div className="card-body p-5">
              <h3 className="text-uppercase text-center mb-5">35 Hours</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    
    </>
  )
}
