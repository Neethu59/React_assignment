import React from 'react'
import './User.css'
import { useState } from 'react'
import {useNavigate } from "react-router-dom";

export default function User({handlename}) {
    const [name,setName]=useState('')

    const navigate=useNavigate()
    const handleinputchange=(event)=>{
      setName(event.target.value)
      console.log(event.target.value);
    }
    const start=(event)=>{
      event.preventDefault()
      console.log(name);
      handlename(name)
      navigate('/work')
    }
  
  return (
    <>
     <section className="vh-100 bg-image" style={{"background-image":"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{"border-radius":"15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">USER DETAILS</h2>
              <form onSubmit={start}>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg"value={name} onChange={handleinputchange}/>
                  <label className="form-label" htmlFor="form3Example1cg">User Name</label>
                </div>
               
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Start Work</button>
                </div>
              </form>
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
