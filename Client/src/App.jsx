import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp'
import Layout from './Pages/Travellerlayout'
import GuideLayout from './Pages/GuideLayout'

function App() {


  return (
  <BrowserRouter>
  <Routes>
    
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/' element={<Layout/>}>

    </Route>

  </Routes>
  </BrowserRouter>
  )
}

export default App
