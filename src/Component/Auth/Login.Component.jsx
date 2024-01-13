import React from 'react'
import login from '../../Images/login.png'

function LoginComponent() {
    return (
        <div className='container text-center'>
            <div className='row  ms-5'>
                <div className='col mt-5 py-5'>
                    <img src={login} className='img-fluid rounded-top login_img' />
                </div>


                <div className='col  mt-5  py-5 text-start'>
                    <div className='card signIn_card mx-4 mt-2 p-4'>

                        <p className='fw-bold fs-5 mt-5'>LogIn</p>
                        <label className='login_label mt-3'>Email</label>

                        <input type="text" className='form-control signIn_input mt-3' />

                        <label className='login_label mt-3'>password</label>

                        <input type="password" className='form-control signIn_input mt-3' />

                        <button className='btn signIn_btn text-light mt-5'>Login</button>

                        <div className='row mt-5'>
                            <div className='col'> <hr></hr></div>
                            <div className='col-2 ms-1'> or</div>
                            <div className='col'> <hr></hr></div>
                        </div>

                        <div className='row'>
                            <div class="d-flex justify-content-center">
                                <div className='col'>
                                    <button className='btn btn-outline-info landing_switch_btn rounded-pill mt-4 px-4'>Sinup</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent