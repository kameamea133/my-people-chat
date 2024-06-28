import React from 'react'
import './addUser.css'
import { RxAvatar } from "react-icons/rx";


const AddUser = () => {
  return (
    <div className='addUser'>
        <form>
            <input  type='text' placeholder='username' name="username"/>
            <button>Search</button>
        </form>
        <div className='user'>
            <div className='detail'>
              <RxAvatar className='avatar'/>  
              <span>Jane Doe</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser