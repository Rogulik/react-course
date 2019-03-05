import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilters'
import Summary from '../components/Summary'

const ExpenseDashboardPage = () => ( 
    <div>
        <Summary />
        <ExpenseListFilter />
        <ExpenseList />
    </div>)

    export default ExpenseDashboardPage