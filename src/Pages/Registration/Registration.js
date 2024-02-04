import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import './Registration.css'

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);



  const handleApi = (e) =>{
    e.preventDefault();
    var myHeaders = new Headers()
    myHeaders.append("token", "sessionid=" + sessionStorage.getItem("token"));

    
    console.log({email,password});
    axios.post('https://reqres.in/api/login',{
        email,
        password,
        headers:myHeaders,
        
    },
    ).then(result=>{
        console.log(result.data)
        // alert('Success');
        sessionStorage.setItem('token', result.data.token)
        setIsLoggedin(true);
     
        
    }
     ).catch(error =>{
        alert('Not a Valid Email Address')
        console.log(error);
     })

     if( email.length===0 || password.length===0){
      setError(true)
    }

  }


  return (
    <div className='DotLogin mt-5 pt-5 d-flex justify-content-center'>
       
    <div className="login_div"> 
    <h4 className='text-center'>ABC BANK</h4>
    <Card className='register_card ps-4 rounded-2 '>
    <form onSubmit={handleApi} className=''>
    <p htmlFor="fname" className='text-body mb-0 fw-bold mt-2'>Create New Account</p>
    <label htmlFor="fname" className='text-body fw-bold mt-2'>Name</label>
      <div className='col-md-10 mt-2'>
      <input
        className="form-control"
        type="email"
        placeholder='Enter Name'
        id="fname"
        onChange={(e)=>setName(e.target.value)}
        name="email"
        value={name}
      />
     </div>
      <label htmlFor="fname" className='text-body fw-bold mt-2'>Email Address</label>
      <div className='col-md-10 mt-2'>
      <input
        className="form-control"
        type="email"
        placeholder='Enter Email'
        id="fname"
        onChange={(e)=>setEmail(e.target.value)}
        name="email"
        value={email}
      />
     </div>
      <label htmlFor="lname" className='text-body fw-bold mt-2'>Password</label>
      <div className='col-md-10 mt-2'>
      <input
        className="form-control"
        type="password"
        placeholder='password'
        id="lname"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        name="password"
      />
    </div>
    <div className='mt-3 '>
    
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <div className='d-flex'>
      <Form.Check type="checkbox"  />
      <small className='ms-1'>Agree the <a href='register' className='text-decoration-none'>terms and policy</a> </small>
      </div>
  
  </Form.Group>
    </div>

      <Button type='submit' variant="primary" className='col-md-10 mt-2 mb-5'>Create New Account</Button>
    </form>
    </Card>
    <div className='mt-3'>
          <small >Already Have an Account ?  <a href='login' className='text-decoration-none'>Sign In</a> </small>
        </div>
  </div>
  </div>
  )
}

export default Registration