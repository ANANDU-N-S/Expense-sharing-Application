import React, { useState } from 'react';
import login from '../../Images/login.png';
import { useNavigate } from 'react-router-dom';

function SignupComponent() {
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        userId: '',
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });


    const [userCounter, setUserCounter] = useState(1);


    const [signupResult, setSignupResult] = useState(null);


    const handleSignup = async (e) => {
        e.preventDefault();


        if (userData.password !== userData.confirmPassword) {
            setSignupResult('Passwords do not match');
            return;
        }


        try {

            const signupSuccess = await mockSignup(userData);

            if (signupSuccess) {
                setSignupResult('Signup successful!');
                navigate("/admin")

                setUserData({
                    userId: '',
                    email: '',
                    phoneNumber: '',
                    password: '',
                    confirmPassword: '',
                });

                setUserCounter((prevCounter) => prevCounter + 1);
            } else {
                setSignupResult('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setSignupResult('An error occurred during signup. Please try again.');
        }
    };


    const mockSignup = async (userData) => {

        return new Promise((resolve) => {
            setTimeout(() => {

                const userId = `u${userCounter}`;
                setUserData({ ...userData, userId });


                const users = JSON.parse(localStorage.getItem('users')) || [];
                const updatedUsers = [...users, { ...userData, userId }];
                localStorage.setItem('users', JSON.stringify(updatedUsers));

                console.log('User data submitted:', { ...userData, userId });
                resolve(true);
            }, 1000);
        });
    };

    return (
        <div className='container text-center'>
            <div className='d-flex justify-content-center'>
                <div className='row  ms-5'>
                    <div className='col mt-5 py-5 text-start'>
                        <div className='card signIn_card mx-4 mt-2 p-4'>
                            <form onSubmit={handleSignup}>
                                <p className='fw-bold fs-5 mt-5'>SignUp</p>

                                <label className='login_label mt-3'>Email</label>
                                <input
                                    type='text'
                                    className='form-control signIn_input mt-3'
                                    value={userData.email}
                                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                />

                                <label className='login_label mt-3'>Name</label>
                                <input
                                    type='text'
                                    className='form-control signIn_input mt-3'
                                    value={userData.name}
                                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                />

                                <label className='login_label mt-3'>Phone Number</label>
                                <input
                                    type='text'
                                    className='form-control signIn_input mt-3'
                                    value={userData.phoneNumber}
                                    onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                                />

                                <label className='login_label mt-3'>Password</label>
                                <input
                                    type='password'
                                    className='form-control signIn_input mt-3'
                                    value={userData.password}
                                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                />

                                <label className='login_label mt-3'>Confirm Password</label>
                                <input
                                    type='password'
                                    className='form-control signIn_input mt-3'
                                    value={userData.confirmPassword}
                                    onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
                                />

                                <button type='submit' className='btn signIn_btn text-light mt-5'>
                                    SignUp
                                </button>

                                {signupResult && <p className={signupResult.includes('successful') ? 'text-success' : 'text-danger'}>{signupResult}</p>}
                            </form>

                            <div className='row mt-5'>
                                <div className='col'> <hr></hr></div>
                                <div className='col-2 ms-1'> or</div>
                                <div className='col'> <hr></hr></div>
                            </div>

                            <div className='row'>
                                <div className='d-flex justify-content-center'>
                                    <div className='col'>
                                        <button className='btn btn-outline-info landing_switch_btn rounded-pill mt-4 px-4' onClick={() => navigate("/expense/loginpage")}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupComponent;