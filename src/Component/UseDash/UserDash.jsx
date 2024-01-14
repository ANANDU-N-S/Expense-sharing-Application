import React, { useState, useEffect } from 'react';
import Dashboard from '../../Pages/Dashboarduser/Dashboard';
import AddExpenseComponent from '../DashboardComponent/AddExpense.Component';
import { CiCircleChevDown } from 'react-icons/ci';
import { LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

function UserDash() {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState(1);
  const [showUser, setShowUser] = useState({});

  useEffect(() => {
    const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    setShowUser(loggedInUserData);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setSelectedItem(1);
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 col-sm-12 dash_sidebar' style={{ height: 'auto', overflowY: 'auto' }}>
          <p className='ms-5 mt-5 dash_sidebar_head'>Expense Met</p>

          <div className='row text-center'>
            <div className='col '>
              <button
                className={`btn rounded-pill mt-5 list_sidebar ${selectedItem === 1 ? 'active' : ''}`}
                onClick={() => handleItemClick(1)}
              >
                Dashboard
              </button>
            </div>
          </div>

          <div className='row text-center'>
            <div className='col '>
              <button
                className={`btn rounded-pill mt-5 list_sidebar ${selectedItem === 2 ? 'active' : ''}`}
                onClick={() => handleItemClick(2)}
              >
                Add Expense
              </button>
            </div>
          </div>
        </div>

        <div className='col-md-9 col-sm-12 nav_dash_main'>
          <nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: '#343d72' }}>
            <a className='navbar-brand ms-auto me-3 navbar_dash' href='#'>
              {showUser.name}
            </a>
            <div className='dropdown me-3'>
              <button
                className='btn dropdown-toggle'
                type='button'
                id='logoutDropdown'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <CiCircleChevDown className='' />
              </button>
              <ul className='dropdown-menu' aria-labelledby='logoutDropdown'>
                <li>
                  <a className='dropdown-item' onClick={handleLogout}>
                    <span>
                      <LuLogOut className='me-2 mb-1' />
                    </span>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className='container dash_content'>
            {selectedItem === 1 && <Dashboard />}
            {selectedItem === 2 && <AddExpenseComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDash;
