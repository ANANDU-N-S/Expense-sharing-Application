import React, { useState } from 'react';
import login from '../../Images/login.png';
import { useNavigate } from 'react-router-dom';


function LoginComponent() {

  const navigate = useNavigate()


  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });


  const [loginResult, setLoginResult] = useState(null);

  const handleLogin = () => {

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((u) => u.name === loginData.name);

    if (user && user.password === loginData.password) {

      localStorage.setItem('loggedInUser', JSON.stringify(user));

      navigate("/admin");

      setLoginResult('Login successful!');

    } else {

      setLoginResult('Invalid email or password. Please try again.');
    }
  };



  return (
    <div className='container text-center'>
      <div className='row  ms-5'>
        <div className='col mt-5 py-5'>
          <img src={login} alt='Login' className='img-fluid rounded-top login_img' />
        </div>

        <div className='col  mt-5  py-5 text-start'>
          <div className='card signIn_card mx-4 mt-2 p-4'>
            <p className='fw-bold fs-5 mt-5'>LogIn</p>
            <label className='login_label mt-3'>Name</label>
            <input
              type='text'
              className='form-control signIn_input mt-3'
              value={loginData.name}
              onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
            />

            <label className='login_label mt-3'>Password</label>
            <input
              type='password'
              className='form-control signIn_input mt-3'
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />

            <button className='btn signIn_btn text-light mt-5' onClick={handleLogin}>
              Login
            </button>

            {loginResult && (
              <p className={loginResult.includes('successful') ? 'text-success' : 'text-danger'}>{loginResult}</p>
            )}

            <div className='row mt-5'>
              <div className='col'> <hr></hr></div>
              <div className='col-2 ms-1'> or</div>
              <div className='col'> <hr></hr></div>
            </div>

            <div className='row'>
              <div className='d-flex justify-content-center'>
                <div className='col'>
                  <button className='btn btn-outline-info landing_switch_btn rounded-pill mt-4 px-4' onClick={() => navigate("/expense/signupage")}>
                    Sinup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;