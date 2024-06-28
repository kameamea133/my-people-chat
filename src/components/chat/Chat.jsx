import React, { useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react';
import { RxAvatar } from "react-icons/rx";
import { FaPhone } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaImage } from "react-icons/fa6";
import { FaCamera, FaMicrophone } from "react-icons/fa";






const Chat = () => {
  const [open, setopen] = useState(false)
  const [text, setText] = useState("")

  const handleEmoji = (e) => {
    setText((prev) => prev +  e.emoji);
    setopen(false)
  }

 

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
        <RxAvatar />

        </div>
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='icons'>
        <FaPhone size={20}/>
        <IoVideocam size={20}/>
        <IoIosInformationCircle size={20}/>
        </div>
      </div>
      <div className='center'>
        <div className='message'>
        <RxAvatar size={50}/>
          <div className='texts'>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'> 
          <div className='texts'>
          <img src="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="beach"/>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <RxAvatar size={50}/>
          <div className='texts'>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
        <RxAvatar size={50}/>
          <div className='texts'>
            <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <span>1 min ago</span>
          </div>
        </div>
        
      </div>
      <div className='bottom'>
        <div className='icons'>
        <FaImage />
        <FaCamera />
        <FaMicrophone />
        </div>
        <input type="text" placeholder='type a message....' onChange={(e) => setText(e.target.value)} value={text}/>
        <div className='emoji'>
        <BsEmojiSmileFill  onClick={() => setopen((prev) => !prev)}/>
        <div className='picker'>
        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
        </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat