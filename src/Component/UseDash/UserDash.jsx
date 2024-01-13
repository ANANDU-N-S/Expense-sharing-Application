import React, { useState } from 'react';
import Dashboard from '../../Pages/Dashboarduser/Dashboard';
import AddExpenseComponent from '../DashboardComponent/AddExpense.Component';

function UserDash() {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 col-sm-12 dash_sidebar' style={{ height: '100vh', overflowY: 'auto' }}>
          <p className='ms-5 mt-5 dash_sidebar_head'>Dashboard Sidebar</p>


          <div className='row text-center'>
            <div className='col '>
              <button className={`btn rounded-pill mt-5 list_sidebar ${selectedItem === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>Dashboard</button>
            </div>
          </div>

          <div className='row text-center'>
            <div className='col '>
              <button className={`btn rounded-pill mt-5 list_sidebar ${selectedItem === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>Add Expense</button>
            </div>
          </div>
        </div>

        <div className='col-md-9 col-sm-12 nav_dash_main'>
          <nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: '#343d72' }}>
            <a className='navbar-brand ms-auto navbar_dash' href='#'>
              Navbar
            </a>
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
