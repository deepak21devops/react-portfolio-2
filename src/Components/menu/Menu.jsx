import React from 'react'
import './menu.scss'
const Menu = ({ menuflag, setMenuflag }) => {
    return (
        <div className={menuflag ? "menu active" : "menu"}>
            <ul className="list">
                <li onClick={() => setMenuflag(false)}><a href="#home">Home</a></li>
                <li onClick={() => setMenuflag(false)}><a href="#portfolio">Portfolio</a></li>
                <li onClick={() => setMenuflag(false)}><a href="#works">Works</a></li>
                <li onClick={() => setMenuflag(false)}><a href="#testimonials">Testimonials</a></li>
                <li onClick={() => setMenuflag(false)}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Menu
