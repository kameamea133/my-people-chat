import { useEffect } from 'react'
import List from "./components/list/List"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { auth } from './lib/firebase'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from './lib/userStore'

function App() {

  const { currentUser, isLoading, fetchUserInfo } = useUserStore()

useEffect(() => {
  const unSub = onAuthStateChanged(auth, (user) => {
    fetchUserInfo(user?.uid)
  }) 
return () => unSub();
}, [fetchUserInfo])



if (isLoading) return <div className='loading'>Loading...</div>

  return (
    <div className='container'>
    {currentUser ? (
      <div className='container'>
          <List />
          <Chat />
          <Detail />
        </div>
      ) :
       (<Login />)}
      <Notification />
    </div>
  )
}

export default App
