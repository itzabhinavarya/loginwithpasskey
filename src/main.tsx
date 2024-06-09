import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserContextProvider } from './context/UserContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 2000,
            style: {
              background: '#363636',
              color: '#fff',
            }
          }}
        />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
