import React from 'react'
import DataTable from 'react-data-table-component';

function DashboardComponent() {
    const data = [
        {
            id: 1,
            user: 'Anandu',
            Expense: "Electricity Bill",
            Amount: "1000 Rs",
            Spilit_Amount: '250 RS',
            date: "12/01/2024",
            Status: "pending"
        },
        {
            id: 2,
            user: 'Anusree ',
            Expense: "Electricity Bill",
            Amount: "1000 Rs",
            Spilit_Amount: '250 RS',
            date: "12/01/2024",
            Status: "pending"
        },
    ]


    const columns = [
        {
            name: 'Members',
            selector: row => row.user,
        },
        {
            name: 'Expense',
            selector: row => row.Expense,
        },
        {
            name: 'Amount',
            selector: row => row.Amount,
        },
        {
            name: 'Spilit Amount',
            selector: row => row.Spilit_Amount,
        },
        {
            name: 'Last Date',
            selector: row => row.date,
        },
        {
            name: 'Status',
            selector: row => row.Status,
        },
    ]

    const customStyles = {
        headRow: {
            style: {
                color: '#fff',
                backgroundColor: '#0088B4',
                fontSize: "13px",
            },
        },
        rows: {
            style: {
                color: "#000",
                backgroundColor: "#fff"
            }
        },
    };

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
                <div className='col ms-5'>
                    <DataTable
                        columns={columns}
                        data={data}
                        customStyles={customStyles}
                        pagination
                    />
                </div>
            </div>

        </div>
    )
}

export default DashboardComponent