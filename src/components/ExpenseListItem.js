import React from 'react'
import {NavLink} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'


const ExpenseListItem = ({id, description,amount,createdAt }) => {
    return (
        <div>
            <NavLink to={`/edit/${id}`}>
                <h3>{description}</h3>
            </NavLink>
            <p>amount: {numeral(amount / 100).format('$0,0.00')}</p>
            <p>Created at: {moment(createdAt).format('Do MMMM, YYYY')}</p>
        </div>
    )
}

export default ExpenseListItem