import React, { useState, useEffect } from 'react';
import { InputGroup } from 'react-bootstrap';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function AddExpenseComponent() {
  const navigate = useNavigate();

  const expenseOptions = [
    { value: 'roomRent', label: 'Room Rent' },
    { value: 'electricityBill', label: 'Electricity Bill' },
    { value: 'waterBill', label: 'Water Bill' },
    { value: 'currentBill', label: 'Current Bill' },
  ];

  const [userData, setUserData] = useState([
    { value: 'vignesh', label: 'Vignesh' },
    { value: 'anandu', label: 'Anandu' },
  ]);

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [expenseAmount, setExpenseAmount] = useState('');

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const MembersArray = users.map((item) => ({
      value: item.name,
      label: item.name,
    }));
    setUserData(MembersArray);
  }, []);

  const handleExpenseChange = (selectedOption) => {
    setSelectedExpense(selectedOption);
  };

  const handleMemberChange = (selectedOptions) => {
    setSelectedMembers(selectedOptions || []);
  };

  const handleExpenseSubmit = () => {
    const selectedMembersData = selectedMembers.map((member) => ({
      expense: selectedExpense.value,
      member: member.value,
      amount: expenseAmount / selectedMembers.length,
    }));

    const existingExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpenses = [...existingExpenses, ...selectedMembersData];
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));


    toast.success('Expense submitted successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      width: '100%',
      color: 'black',
      fontSize:"18px"
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      color: 'black',
      fontSize:"18px"
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      color: 'black',
      fontSize:"18px"
    }),
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col mt-5 ms-3'>Add Expense</div>
      </div>

      <div className='row'>
        <div className='col-3 ms-5 mt-5'>
          <label>Select Expense</label>
          <br />
          <Select
            value={selectedExpense}
            onChange={handleExpenseChange}
            options={expenseOptions}
            className='ms-xxl-0 ms-xl-0 ms-lg-0 mt-3 '
            styles={selectStyles}
          />
        </div>

        <div className='col-3 ms-5 mt-5'>
          <label>Select Members</label>
          <br />
          <InputGroup style={{ width: '100%' }}>
            <Select
              value={selectedMembers}
              onChange={handleMemberChange}
              options={userData}
              className='ms-xxl-0 ms-xl-0 ms-lg-0 mt-3 '
              styles={selectStyles}
              isMulti
            />
          </InputGroup>
        </div>

        <div className='col-3 ms-5 mt-5'>
          <label>Expense Amount</label>
          <br />
          <input
            className='form-control mt-3'
            type='text'
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
        </div>
      </div>

      <div className='row'>
        <div className='d-flex justify-content-center'>
          <div className='col-3 ms-5 mt-5'>
            <button className='btn rounded-pill btn_expense mb-5' onClick={handleExpenseSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <ToastContainer position='top-center' autoClose={2000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default AddExpenseComponent;
