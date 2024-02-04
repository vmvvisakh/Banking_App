
import axios from 'axios';
import React, { useState } from 'react'
import { Button, ButtonGroup, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import '../Registration/Registration.css'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const navigate=useNavigate()

  const handleApi = (e) =>{
    e.preventDefault();
   
    console.log({email,password});
    axios.post('https://reqres.in/api/login',{
        email,
        password,
       
        
    },
    ).then(result=>{
        console.log(result.data)
        // alert('Success');
        sessionStorage.setItem('token', result.data.token)
        setIsLoggedin(true);
        if( result.data.token ){
          navigate('/home')
        }
        
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
        <Card className='register_card ps-4 rounded-2'>
        <form onSubmit={handleApi} className=''>
        <p htmlFor="fname" className='text-body mb-0 fw-bold mt-2'>Login To your Account</p>
          <label htmlFor="fname" className='text-body fw-bold mt-3'>Email Address</label>
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
        <div className='mt-3'>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
        </div>

          <Button type='submit' variant="primary" className='col-md-10 mt-2 mb-5'>Sign In</Button>
        </form>
        </Card>
        <div className='mt-3'>
          <small >Don't have account yet ? <a href='register' className='text-decoration-none'>Sign Up</a> </small>
        </div>
      </div>
      </div>
  )
}

export default Login