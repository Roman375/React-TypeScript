import React from 'react'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper deep-purple darken-2 px1">
                <a href="/" className="brand-logo">TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Список завдань</a></li>
                    <li><a href="/">Інформація</a></li>
                </ul>
            </div>
        </nav>
    )
}