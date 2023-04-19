import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'

import { BrowserRouter, Route } from "react-router-dom"
import { Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes/>  
     </BrowserRouter>
  </React.StrictMode>
)
