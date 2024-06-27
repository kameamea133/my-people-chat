import React from 'react'
import "./userInfo.css"
import { RxAvatar, RxCamera } from "react-icons/rx";
import { IoIosMore } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";

const UserInfo = () => {
  return (
    <div className='userInfo'>
    <div className='user'>
    
      <RxAvatar size={24}/>
    
      <h2>Stephane Monnier</h2>
    </div>
    <div className='icons'>
    <IoIosMore />
    <RxCamera />
    <AiOutlineEdit />
    </div>
    </div>
  )
}

export default UserInfo