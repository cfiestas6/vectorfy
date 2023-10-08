import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './Provider.jsx'
import Inputs from './Inputs.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
)

