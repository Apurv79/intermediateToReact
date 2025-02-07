import React, { useState } from 'react'
import userContext from './userContext'

export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState({})

  return (
    <userContext.Provider value={{ username, setUsername, user, setUser }}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider
