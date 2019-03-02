import React,{Component} from 'react'
import {setTechnology} from './actions/actions'
import store from './store/store'

const ButtonGroup = ({technologies}) => {
    const dispatchBtnAction = (e) => {
        const tech = e.target.dataset.tech
        store.dispatch(setTechnology(tech))
    }
    return (
        <div>
            {technologies.map((tech,i) => {
               return <button 
                className='btn-hello'
                key={`btn-${i}`}
                data-tech={tech}
                onClick={dispatchBtnAction}
                >
                    {tech}
                </button>
            })}
        </div>
    )
}

export default ButtonGroup