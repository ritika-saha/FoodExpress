import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  
  const[cred, setCred]=useState({
    email:"",
    password:""
  })

  let navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch("https://foodexpress-v6zu.onrender.com/api/loginuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email: cred.email,
        password: cred.password
      })
    })
    const json=await response.json()
    console.log(json)
    if(!json.success){
      alert("Enter valid Credentials")
    }
    if(json.success){
      localStorage.setItem("userEmail",cred.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/")
    }
  }

  const onchange=(e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
  }


  return (
    
 <div className='container'>
      <form onSubmit={handleSubmit}>
      

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={cred.email} onChange={onchange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={cred.password} onChange={onchange}/>
  </div>
 
  
  <button type="submit" className='m-3 btn btn-warning'>Submit</button>
  <Link to='/createuser' className='m-3 btn btn-danger'>New user?</Link>
</form>

</div>
   
  )
}

export default Login