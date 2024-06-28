import { useState } from 'react'
import List from "./components/list/List"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"

import './App.css'

function App() {

  const user = true;

  return (
    <div className='container'>
    {user ? (
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
