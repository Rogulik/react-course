import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/store'
import TransfersButtons from './components/TransfersMoney'


const App = () => {
    return (
        <div>
            <h1>Hello {store.getState().name} </h1>
            <p>Balance of Your account is: ${store.getState().balance}</p>
            <TransfersButtons />
        </div>
        )
}

const render = () => ReactDOM.render(<App/>,document.querySelector('#app'))

render()

store.subscribe(render)