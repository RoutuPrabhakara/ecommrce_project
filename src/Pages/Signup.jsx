import axios from 'axios'
import React, { useState } from 'react'

function Signup() {
  const[formdata,SetFormData]=useState({
    name:'',
    email:'',
    password:''
})

const Handler =(e)=>{
  SetFormData({...formdata,[e.target.name]:e.target.value})
}

const submitHandler = async(e)=>{
  e.preventDefault();
  try {
   
    await axios.post('http://localhost:5000/SignUp',formdata)
    .then((response)=>{
      console.log('Data is connected',response.data)
      alert(`<img src="https://codeconvey.com/wp-content/uploads/2020/06/registration-successful-message-html.png.webp" alt="Logo">`)
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
                        <h1 className="fs-3 text-center fw-blod">Create Account</h1>

                        <label htmlFor="email">Username <span className='text-danger'>*</span></label>
                        <input type="text" name="name" value={formdata.name} id="email" className='form-control mb-2' placeholder='Enter  your Username'  required  onChange={Handler}/>

                        <label htmlFor="email">Email Address <span className='text-danger'>*</span></label>
                        <input type="text" name="email" value={formdata.email} id="email" className='form-control mb-2' placeholder='Enter  your Email'  required onChange={Handler} />

                        <label htmlFor="" className='form-label'>Password <span  className='text-danger'>*</span></label>
                        <input type="password" className='form-control'  name ="password" value={formdata.password} placeholder='Enter your Password' onChange={Handler} />

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