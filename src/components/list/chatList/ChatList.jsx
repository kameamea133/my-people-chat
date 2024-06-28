import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import AddUser from "./addUser/AddUser"



import "./chatList.css"

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='chatList'>
      <div className='search'>
        <div className='searchBar'>
        <IoMdSearch size={24}/>
        <input type="text" placeholder="search" />
        </div>
        <div className="addContainer" onClick={() => setAddMode((prev) => !prev)}>

        {addMode ? <AiOutlinePlus size={20} className='add'/> : <AiOutlineMinus size={20} className='add'/>
        }
        </div>
      </div>
      <div className='item'>
      <RxAvatar className='avatar' />
      <div className='texts'>
        <span>Jane Doe</span>
        <p>hello</p>
      </div>
      </div>

      <div className='item'>
      <RxAvatar className='avatar' />
      <div className='texts'>
        <span>Jane Doe</span>
        <p>hello</p>
      </div>
      </div>

      <div className='item'>
      <RxAvatar className='avatar' />
      <div className='texts'>
        <span>Jane Doe</span>
        <p>hello</p>
      </div>
      </div>
        {addMode && <AddUser />  }            
    </div>
  )
}

export default ChatList