import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {

  const[cred, setCred]=useState({
    name:"",
    email:"",
    password:"",
    location:""
  })

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch("http://localhost:5000/api/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name: cred.name,
        email: cred.email,
        password: cred.password,
        location: cred.location
      })
    })
    const json=await response.json()
    console.log(json)
    if(!json.success){
      alert("Enter valid Credentials")
    }
  }

  const onchange=(e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
  }

  return (
    <>
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={cred.name}  onChange={onchange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={cred.email} onChange={onchange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={cred.password} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='location' value={cred.location} onChange={onchange}/>
  </div>
  
  <button type="submit" className='m-3 btn btn-warning'>Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already a user?</Link>
</form>

</div>
    </>
  )
}

export default Signup