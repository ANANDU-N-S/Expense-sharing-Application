import React from 'react'

function AddExpenseComponent() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col mt-5 ms-3'>
                    Add Expense
                </div>
            </div>

            <div className='row'>
                <div className='col-3 ms-5 mt-5'>
                    <label>Select Expense</label><br />
                    <select className='form-select mt-3'>
                        <option>--select an option--</option>
                        <option>Room Rent</option>
                        <option>Electricty Bill</option>
                        <option>Water Bill</option>
                        <option>Current Bill</option>
                    </select>
                </div>

                <div className='col-3 ms-5 mt-5'>
                    <label>Select Members</label><br />
                    <select className='form-select mt-3'>
                        <option>--select an option--</option>
                        <option>Anandu N S</option>
                        <option>Anusree</option>
                        <option>Vignesh</option>
                        <option>Reshma</option>
                    </select>
                </div>

                <div className='col-3 ms-5 mt-5'>
                    <label>Expense Amount</label><br />
                    <input className='form-control mt-3' type="text" />
                </div>
            </div>

            <div className='row'>
                <div className='col-3 ms-5 mt-5'>
                    <label>Last Date</label><br />
                    <input type='date' className='form-control mt-3' />
                </div>
            </div>

            <div className='row'>
                <div className='d-flex justify-content-center'>
                    <div className='col-3 ms-5 mt-5'>
                        <button className='btn rounded-pill btn_expense'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddExpenseComponent