import {addExpense, removeExpense,editExpense} from '../../actions/expenses'

test('should remove the object',() => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should edit expnese object', () => {
    const action = editExpense('123abc',{note: 'Change'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'Change'
        }
    })
})

test('should setup new expense',() => {
    const action = addExpense(
    {
        description:'Buja',
        note:'taka muza',
        amount:2,
        createdAt:1,
    })
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: 
        {
        description:'Buja',
        note:'taka muza',
        amount:2,
        createdAt:1,
        id: expect.any(String)
        }
    })
})

test('should setup default value',() => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0,

        }
    })
})