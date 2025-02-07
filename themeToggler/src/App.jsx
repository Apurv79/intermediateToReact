import React from 'react'
import Login from './component/Login'
import Profile from './component/Profile'
import { UserContextProvider } from './context/userContextProvider'

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
