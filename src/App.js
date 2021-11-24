import React from 'react'
import GlobalStyle from './assets/GlobalStyle'
import Home from './screen/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './screen/Login'
import { isAuthenticated } from './auth'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
