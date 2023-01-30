import React from 'react'
import Products from './Component/Pages/Products'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pageroutes from './Component/Pages/Pageroutes'
import Registration from './Registration'

function App() {
  return (
    <BrowserRouter>
    <Pageroutes />
    {/* <Registration /> */}

    </BrowserRouter>
  )
}

export default App
