import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/login/Login'
import Signup from '../components/signup/Signup'
import Homepage from '../components/homepage/Homepage'

const Navigation: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>
    )
}

export default Navigation