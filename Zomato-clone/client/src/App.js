import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddRestro from './Components/AddRestro';
import Viewfood from './Components/Viewfood';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/addrestro' element={<AddRestro/>} />
        <Route path='/viewfood' element={<Viewfood/>} />
      </Routes>
    </div>
  )
}

export default App;