import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pageroutes from './Component/Pages/Pageroutes'
// import Registration from './Registration'

function App() {
  return (
    <BrowserRouter>
    <Pageroutes />
    {/* <Registration /> */}

    </BrowserRouter>
  )
}

export default App
