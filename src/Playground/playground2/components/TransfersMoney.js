import React from 'react'
import store from '../store/store'
import {setWithdraw,setTransfer,setResetAccount} from '../actions/action'

const TransfersButtons = () => {
    const withdrawMoney = () => {
         store.dispatch(setWithdraw(1500))
    }
    const transferMoney = () => {
         store.dispatch(setTransfer(1500))
    }
    const withdrawAllMoney = () => {
        store.dispatch(setResetAccount())
    }
    return (
        <div>
            <button onClick={withdrawMoney}>Withdraw $1500</button>
            <button onClick={transferMoney}>Transfer $1500</button>
            <button onClick={withdrawAllMoney}>Transfer all of Your money on charity</button>
        </div>
    )
}

export default TransfersButtons