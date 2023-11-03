import React, { useState } from 'react'

export default function Sample({title,houres}) {
    
    
  return (
    <>
     <div className="col-md-6 mb-4 ">
          <div className="card">
          <div className="card-header">
        <h3 className='text-center'>{title} </h3>
         </div>
            <div className="card-body p-5">
              <h3 className="text-uppercase text-center mb-5">{houres}</h3>
            </div>
          </div>
        </div>
    </>
  )
}
