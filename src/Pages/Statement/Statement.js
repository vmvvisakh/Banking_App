import React from 'react'
import Home_bar_common from '../Home/Home_bar_common'
import { Button, Card, Pagination, Table } from 'react-bootstrap'

function Statement() {
  return (
    <div className=''> 
    <h4 className='home_heading mt-5'>ABC BANK</h4>
    <Home_bar_common />
    <div className='mt-5 pt-2 home_body'>
    <Card className='ps-4 rounded-2 col-md-6'>
    <p className=' mb-0 mt-3 border-bottom pb-2'>Statement of Account</p>
    <div>
    <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>Date Time</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Details</th>
          <th className=''>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>18-08-2018 <br /> 10:45 AM</td>
          <td>2000.00</td>
          <td>Credit </td>
          <td>deposit</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>20-07-2018 <br /> 11:45 AM</td>
          <td>3000.00</td>
          <td>Debit </td>
          <td>withdraw</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>18-08-2018 <br /> 10:45 AM</td>
          <td>2000.00</td>
          <td>Credit </td>
          <td>Transfer From <br />friend@gmail.com</td>
          <td>5000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>18-08-2018 <br /> 10:00 PM</td>
          <td>2000.00</td>
          <td>Debit </td>
          <td>Withdraw</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>5</td>
          <td>18-08-2018 <br /> 10:45 AM</td>
          <td>2000.00</td>
          <td>Credit </td>
          <td>deposit</td>
          <td>2000</td>
        </tr>
      </tbody>
    </Table>
    </div>
    <Pagination>
      <Pagination.First />
      
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      
      <Pagination.Last />
      
    </Pagination>
    </Card>
    </div>
</div>
  )
}

export default Statement