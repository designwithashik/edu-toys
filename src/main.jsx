import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Providers/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>,
)
