

export const setWithdraw = (amount) => ({
    type: 'WITHDRAW_MONEY',
    amount
})

export const setTransfer = (amount) => ({
    type: 'TRANSFER_MONEY',
    amount
})

export const setResetAccount = (balance) => ({
    type: 'RESSET_ACCOUNT',
    balance,
})