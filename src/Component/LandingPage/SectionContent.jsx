import React from 'react'
import { useNavigate } from 'react-router-dom'

function SectionContent() {

    const navigate = useNavigate()
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col mt-5 px-5 py-5 Main_home_name">
                    Welcome To Expense Met
                </div>
            </div>

            <div class="row text-center">
                <div class="d-flex justify-content-center">
                    <div class="col ms-2 main_home_sub">
                        Now You can share Expense from Anywhere
                    </div>
                </div>
            </div>

            <div class="row text-center">
                <div class="d-flex justify-content-center">
                    <div class="col-10 p-1 mt-5 my-5 mx-5 main_home_sub2">
                        <button className='btn btn_get_started' onClick={() => navigate("/expense/loginpage")}>Get started</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SectionContent