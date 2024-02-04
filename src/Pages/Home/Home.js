import React from 'react'
import Home_bar_common from './Home_bar_common'
import './Home_bar_common.css'
import { Card } from 'react-bootstrap'

export default function Home() {
  return (
    <div className=''> 
        <h4 className='home_heading mt-5'>ABC BANK</h4>
        <Home_bar_common />
        <div className='mt-5 pt-2 home_body'>
        <Card className='ps-4 rounded-2 col-md-6'>
        <p  className='text-body mb-0 fw-bold mt-3 border-bottom pb-2'>Welcome John Doe</p>
        <div className='border-bottom mt-2 pb-2 d-flex'>
        <small className='mt-1 '>Your ID</small>
        <p className='ms-5'>Johndoe@gmail.com</p>
        </div>
        <div className='mt-3 pb-3 d-flex'>
        <small className=' mt-1'>Your Balance</small>
        <p className='ms-3'>20,0000 INR</p>
        </div>
        </Card>
        </div>
    </div>
  )
}
