import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { IoMdArrowUp, IoMdArrowDown , IoMdDownload} from "react-icons/io";


import "./detail.css"


const Detail = () => {
  return (
    <div className='detail'>
     <div className='user'>
     <div className='avatarUser'>

      <RxAvatar size={65}/>
     </div>
      <h2>Jane Doe</h2>
      <p>Lorem ipsum dolor sit amet.</p>
     </div>
     <div  className='info'>
     <div className='option'>
      <div className='title'>
        <span>Chat Settings</span>
        <div className='optionIcon'>
        <IoMdArrowUp size={18} />
        </div>
      </div>
     </div>

     <div className='option'>
      <div className='title'>
        <span>Chat Settings</span>
        <div className='optionIcon'>
        <IoMdArrowUp size={18} />
        </div>
      </div>
     </div>

     <div className='option'>
      <div className='title'>
        <span>Privacy & help</span>
        <div className='optionIcon'>
        <IoMdArrowUp size={18} />
        </div>
      </div>
     </div>

     <div className='option'>
      <div className='title'>
        <span>Shared photos</span>
        <div className='optionIcon'>
        <IoMdArrowDown size={18} />
        </div>
      </div>
      <div className='photos'>
        <div className='photoItem'>
        <div className='photoDetail'>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>photo_2024_png</span>
        </div>
        <IoMdDownload className='downloadIcon' size={18}/>
        </div>
        <div className='photoItem'>
        <div className='photoDetail'>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>photo_2024_png</span>
        </div>
        <IoMdDownload className='downloadIcon' size={18}/>
        </div>
        <div className='photoItem'>
        <div className='photoDetail'>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>photo_2024_png</span>
        </div>
        <IoMdDownload className='downloadIcon' size={18}/>
        </div>
        <div className='photoItem'>
        <div className='photoDetail'>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>photo_2024_png</span>
        </div>
        <IoMdDownload className='downloadIcon' size={18}/>
        </div>
      </div>
     </div>

     <div className='option'>
      <div className='title'>
        <span>Shared files</span>
        <IoMdArrowDown size={18} className='optionIcon'/>
      </div>
     </div>
     <button>Block user</button>
     </div>
    </div>
  )
}

export default Detail