import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Check from './pages/check/Check'
import Class from './pages/Class/Class'
import Exam from './pages/exam/Exam'
import Home from './pages/home/Home'
import Login from './pages/Login./Login'
import Onboard from './pages/onBoard/Onboard'
import Settings from './pages/settings/Settings'

const App = () => {
  return (
    <div className='app'>

    <Router>
    <Header/>
<Routes>
  <Route exact path='/' element={<Home/>}></Route>
  <Route exact path='/home' element={<Home/>}></Route>
  <Route exact path='/exam' element={<Exam/>}></Route>
  <Route exact path='/login' element={<Login/>}></Route>
  <Route exact path='/settings' element={<Settings/>}></Route>
  <Route exact path='/onboard' element={<Onboard/>}></Route>
  <Route exact path='/class' element={<Class/>}></Route>
  <Route exact path='/check' element ={<Check/>}></Route>
</Routes>
    </Router>

    </div>
  )
}

export default App