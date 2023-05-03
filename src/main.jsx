import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/Home'

import { BrowserRouter, Route } from "react-router-dom"
import { Ruta } from './Routes/Routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        <Ruta/>  
     </BrowserRouter>
  </React.StrictMode>
)
