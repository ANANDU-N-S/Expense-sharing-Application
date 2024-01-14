import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()
    return (
        <div className="container text-start main_nav_cont fixed-top">
            <div className="row">
                <div className="col-10 ">
                    <p className='me-5 mt-2 Main_logo' onClick={() => navigate("/")}>Expense Met</p>
                </div>
                <div className='col'>
                    <p className='Navbar_signup mt-4' onClick={() => navigate("/expense/loginpage")}>LogIn</p>

                </div>

                <div className='col'>
                    <p className='Navbar_signup mt-4' onClick={() => navigate("/expense/signupage")}>Signup</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar