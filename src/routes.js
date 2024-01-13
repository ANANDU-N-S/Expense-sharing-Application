import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainDashboardPage from './Pages/MainDashboardPage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import UserMainPage from './Pages/UserMainDash/UserMainPage'

function Navigation() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainDashboardPage />} />
                <Route path="/expense/loginpage" element={<Login />} />
                <Route path="/expense/signupage" element={<Signup />} />
                <Route path="/expense/user/dashboard" element={<UserMainPage />} />
                <Route path="/admin" element={<UserMainPage />} />
            </Routes>
        </div>
    )
}

export default Navigation