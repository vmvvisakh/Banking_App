import React from 'react'
import { ITbHome2, TbBuildingBank, TbBuildingEstate, TbCash, TbHome2, TbLogout, TbTransferIn } from "react-icons/tb";
import './Home_bar_common.css'
import { useNavigate } from 'react-router';

function Home_bar_common() {
//     const navigate=useNavigate()

// const navigateToDeposit = () => {
  
//   navigate("/deposit");
// };

  return (
    <div className='home_bar d-flex pt-3'>
       <TbHome2  size={20} className='mt-1' /><a href="home" className='text-decoration-none'><small  className='ms-1'>Home</small></a> 
       <TbBuildingBank size={20} className='ms-3 mt-1' /><a href="deposit" className='text-decoration-none'><small  className='ms-1'>Deposit</small></a> 
       <TbCash size={20} className='ms-3 mt-1' /><a href="withdraw" className='text-decoration-none'><small className='ms-1'>Withdraw</small></a> 
       <TbTransferIn size={20} className='ms-3 mt-1' /><a href="transfer" className='text-decoration-none'><small className='ms-1'>Transfer</small></a> 
       <TbBuildingEstate size={20} className='ms-3 mt-1' /><a href="statement" className='text-decoration-none'><small className='ms-1'>Statement</small></a> 
       <TbLogout size={20} className='ms-3 mt-1' /><a href="login" className='text-decoration-none'><small className='ms-1'>Logout</small></a> 
    </div>
  )
}

export default Home_bar_common