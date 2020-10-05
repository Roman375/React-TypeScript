import React from 'react'

export const TodosList: React.FC = (props) => {
    return(
        <ul>
            <li>
                <label>
                    <input 
                    type='checkbox'
                    />
                    <span>Hello</span>
                    <i className="material-icons red-text">delete</i>
                </label>
            </li>
        </ul>
    )
}