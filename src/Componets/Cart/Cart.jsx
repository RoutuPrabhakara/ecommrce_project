import React, { useState } from 'react'

function Cart() {
    const [allCartdata,SetallCartData]=useState([])
  return (
    <div>
        <div className="p-3 p-md-5 container-fluid">
            <div className="row">
                {
                    allCartdata.length==0?(
                        <div className="col-md-5 m-auto">
                            <div className="text-center">
                                <img src="https://assets-v2.lottiefiles.com/a/0e30b444-117c-11ee-9b0d-0fd3804d46cd/BkQxD7wtnZ.gif" alt="logo"  className='w-75' />
                                <h2 className='fs-3'>No Cart Data</h2>
                                <a href="/" className='btn btn-success'>Shop Now</a>
                            </div>
                        </div>
                    ):(null)
                }
            </div>
        </div>
    </div>
  )
}

export default Cart