import React from 'react'
import Logo from './../../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigation=useNavigate();
  return (
    <div className=" flex flex-row justify-between items-center
     shadow-lg p-4 rounded-lg text-gray-600">
        <button onClick={()=> navigation('/new')} className="btn btn-primary btn-sm md:btn-md" >+ Express Your Idea</button>
        <h2 className="font-bold text-sm md:text-2xl" >Top 20 Ideas</h2>

        <div className="flex justify-center items-center ">
            <img src={Logo} className="w-10 h-10 mr-1 rounded-full" />
            <h3 className=" font-bold text-sm hidden md:block">By <br /> Flexguruji</h3>
        </div>
    </div>
  )
}

export default Header