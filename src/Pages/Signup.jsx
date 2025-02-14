import axios from 'axios'
import React, { useState } from 'react'

function Signup() {
  const[formsdata,SetFormData]=useState({
    name:'',
    email:'',
    password:''
})

const Handler =(e)=>{
  SetFormData({...formsdata,[e.target.name]:e.target.value})
}

const submitHandler = async(e)=>{
  e.preventDefault();
  try {
   
    await axios.post('https://ecommerse-login.onrender.com/SignUp',formsdata)
    .then((response)=>{
      console.log('Data is connected',response.data)
      alert('Registration Succesful')
      SetFormData({ name: '', email: '', password: '' });
    })
  } catch (error) {
    console.log(error)
    alert('Error registering. Please try again.');
  }
}
  return (
    <div>
          <div className="container-fluid p3 p-md-5 bg-light mt-4 mb-4">
            <div className="row">
              <form action="" onSubmit={submitHandler}>
              <div className="col-md-5 m-auto">
                    <div className="card p-3 shadow-sm">
                        <h1 className="fs-3 text-center fw-bold">Create Account</h1>

                        <label htmlFor="email">Username <span className='text-danger'>*</span></label>
                        <input type="text" name="name" value={formsdata.name}  id="email" className='form-control mb-2' placeholder='Enter  your Username'  required  onChange={Handler}/>

                        <label htmlFor="email">Email Address <span className='text-danger'>*</span></label>
                        <input type="text" name="email" value={formsdata.email} id="email" className='form-control mb-2' placeholder='Enter  your Email'  required onChange={Handler} />

                        <label htmlFor="" className='form-label'>Password <span  className='text-danger'>*</span></label>
                        <input type="password" className='form-control'  name ="password" value={formsdata.password} placeholder='Enter your Password' onChange={Handler} />

                        {/* <p className='small text-end mt-2'><a href="">Forgot Password</a></p>
                        <br /> */}
                        <p className='small'>Do you  have already an account ? <a href="/Login">Login</a></p>
                        <button className='btn btn-success' type='submit'> Create Account</button>
                    </div>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
