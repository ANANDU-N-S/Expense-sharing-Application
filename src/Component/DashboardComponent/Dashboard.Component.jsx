import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

function DashboardComponent() {
    const [data, setData] = useState([]);
    const [showUser, setShowUser] = useState({});

    useEffect(() => {
        const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser')) || {};
        setShowUser(loggedInUserData);
    }, []);


    const filteredExpenses = data.filter(expense => expense.member.toLowerCase() === showUser.name.toLowerCase());

    const formatAmount = (amount) => {
        const roundedAmount = Number(amount).toFixed(2);
        const [integerPart, decimalPart] = roundedAmount.split('.');
        return decimalPart === '00' ? integerPart : roundedAmount;
    };


    const columns = [
        {
            name: 'Member',
            selector: (row) => row.member,
        },
        {
            name: 'Expense',
            selector: (row) => row.expense,
        },
        {
            name: 'Spilited Amount',
            selector: (row) => formatAmount(row.amount),
        },

    ];

    const customStyles = {
        headRow: {
            style: {
                color: '#fff',
                backgroundColor: '#0088B4',
                fontSize: '13px',
            },
        },
        rows: {
            style: {
                color: '#000',
                backgroundColor: '#fff',
            },
        },
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('expenses')) || [];
        setData(storedData);
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <p className='Expense_head mt-5 ms-3'>Dashboard</p>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <p className='Expense_sub_label mt-3 ms-5'>Show Expense</p>
                </div>
            </div>

            <div className='row'>
                <div className='col ms-5 mb-5'>
                    <DataTable columns={columns} data={filteredExpenses} customStyles={customStyles} pagination />
                </div>
            </div>
        </div>
    );
}

export default DashboardComponent;