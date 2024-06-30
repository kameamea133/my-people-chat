import "./userInfo.css"
import { RxAvatar, RxCamera } from "react-icons/rx";
import { IoIosMore } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { useUserStore } from "./../../../lib/userStore";

const UserInfo = () => {
  const { currentUser } = useUserStore()


  return (
    <div className='userInfo'>
    <div className='user'>
      <img src={currentUser.avatar || "./avatar.png"}/>
      
    
      <h2>{currentUser.username}</h2>
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