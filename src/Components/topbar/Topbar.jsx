import React, { useState } from 'react'
import './topbar.scss'

import { Person, Mail } from '@material-ui/icons'

const Topbar = ({ menuflag, setMenuflag }) => {

    return (
        <div className={menuflag ? "topbar active" : "topbar"}>
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">Nebula.</a>
                    <div className="navitems">
                        <Person className="icon" />
                        <span>+91 123-456-7890</span>
                    </div>
                    <div className="navitems">
                        <Mail className="icon" />
                        <span>DakotaJohnson@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuflag(!menuflag)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
