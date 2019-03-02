import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import store from './store/store'
import ButtonGroup from './ButtonGroup'


const App = () => {
    return (
        <div>
            <h1>My first Redux</h1>
            <Message redux={store.getState().tech}/>
            <ButtonGroup technologies={['React','Elm','React-redux']} />
        </div>
    )
}

const render = () => ReactDOM.render(<App/>, document.querySelector('#app'))
render()
store.subscribe(render)

