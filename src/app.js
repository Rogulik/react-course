import React from 'react'
import ReactDOM from 'react-dom' 
import {Provider} from 'react-redux'
import AppRouter from './components/routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.querySelector('#app'))

// console.log(visibleExpenses)
// const Info = (props) => (
//     <div>
//         <h1>Authenticated</h1>
//         <p>Here is the data: {props.info}</p>
//     </div>
// )

// const requireAuthentication = (WrappedComponent) => {
//     return (props) => (
//         <div>
//            {props.isAuthenticated ? (
//             <WrappedComponent {...props} />
//            ) : (
//                 <p>You are not allowed to see the content</p>
//            )}
            
//         </div>
//     )
// }

// const AuthInfo = requireAuthentication(Info)