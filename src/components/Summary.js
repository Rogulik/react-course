import React from 'react'
import expenseTotal from '../selectors/expenses-total'
import Expenses from '../selectors/expenses'
import {connect} from 'react-redux'
import numeral from 'numeral'


const Summary = ({expenseCount,expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00')
    return (
        <div>
            <h4>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h4>
        </div>
    )
}


const mapStateToProps = (state) => {
    const visibleExpenses = Expenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: expenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(Summary)