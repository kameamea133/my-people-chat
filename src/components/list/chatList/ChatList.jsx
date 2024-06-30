import { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "./../../../lib/userStore";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "./../../../lib/firebase";


import "./chatList.css"

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);
  const {currentUser} = useUserStore()

  useEffect(() => {
   
    
    const unSub =  onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
      const items = res.data().chats;
      const promises = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.receivedId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data();

        return { ...item, user}
      })

      const chatData = await Promise.all(promises);
      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    })

    return () => {
      unSub();
    }
  }, [currentUser.id])
console.log(chats)

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
     
        {chats.map((chat) => (

      <div className='item' key={chat.chatId}>
      <RxAvatar className='avatar' />
      <div className='texts'>
        <span>{chat.user.username}</span>
        <p>{chat.lastMessage}</p>
      </div>
      </div>
        ))}
        {addMode && <AddUser />  }            
    </div>
  )
}

export default ChatList