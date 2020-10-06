import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper deep-purple darken-2 px1">
                <NavLink to="/" className="brand-logo">TypeScript</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список завдань</NavLink></li>
                    <li><NavLink to="/about">Інформація</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}