
const stateOfApp= {
    name: "Jane",
    balance: 3500
}

export default (state = stateOfApp,action) => {
    switch(action.type) {
        case 'WITHDRAW_MONEY':
        return {
            ...state,
            balance: state.balance - action.amount
            
        }
        case 'TRANSFER_MONEY' :
        return {
            ...state,
            balance: state.balance + action.amount
        }
        case 'RESSET_ACCOUNT':
        return {
            ...state,
            balance: 0
        }
        default:
        return state
    }
}