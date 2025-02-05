import React from 'react'

function Signup() {
  return (
    <div>
          <div className="container-fluid p3 p-md-5 bg-light mt-4 mb-4">
            <div className="row">
                <div className="col-md-5 m-auto">
                    <div className="card p-3 shadow-sm">
                        <h1 className="fs-3 text-center fw-blod">Create Account</h1>

                        <label htmlFor="email">Username <span className='text-danger'>*</span></label>
                        <input type="text" name="" id="email" className='form-control mb-2' placeholder='Enter  your Username'  required />

                        <label htmlFor="email">Email Address <span className='text-danger'>*</span></label>
                        <input type="text" name="" id="email" className='form-control mb-2' placeholder='Enter  your Email'  required />

                        <label htmlFor="" className='form-label'>Password <span  className='text-danger'>*</span></label>
                        <input type="text" className='form-control' placeholder='Enter your Password' />

                        {/* <p className='small text-end mt-2'><a href="">Forgot Password</a></p>
                        <br /> */}
                        <p className='small'>Do you  have already an account ? <a href="/Login">Login</a></p>
                        <button className='btn btn-success' type='submit'> Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup