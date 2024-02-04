import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Home_bar_common from '../Home/Home_bar_common'

function Withdraw() {
  return (
    <div className=''> 
    <h4 className='home_heading mt-5'>ABC BANK</h4>
    <Home_bar_common />
    <div className='mt-5 pt-2 home_body'>
    <Card className='ps-4 rounded-2 col-md-6'>
    <p className=' mb-0 fw-bold mt-3 border-bottom pb-2'>Withdraw Money</p>
    <div className=' mt-3 '>
    <small className='fw-bold'>Amount</small>
    <div className='col-md-11 mt-2'>
    <input
            className="form-control "
            type="number"
            placeholder='Enter Amount to Withdraw'
           
          />
    </div>
   

<Button type='submit' variant="primary" className='col-md-11 mt-3 mb-4'>Withdraw</Button>
    </div>
  
    </Card>
    </div>
</div>
  )
}

export default Withdraw