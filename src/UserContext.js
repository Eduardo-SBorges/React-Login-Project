import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

  const userLogout = useCallback(
    async function () {
      setLogin(false)
      navigate('/')
    },
    [navigate],
  )

  return (
    <UserContext.Provider value={{ login, userLogout, setLogin }}>
      {children}
    </UserContext.Provider>
  )
}
