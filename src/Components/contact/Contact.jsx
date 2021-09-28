import React, { useState } from 'react'
import "./contact.scss"

const Contact = () => {
    const [message, setMessage] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/contact.jpg" alt="hand"></img>
            </div>
            <div className="right">
                <h1>Contact.</h1>
                <form>
                    <input type="email" placeholder="Enter Email"></input>
                    <textarea placeholder="Type Message here"></textarea>
                    <button onClick={(e) => handleClick(e)}>Send</button>
                    {message ? <span>Thank You Submitting !!!!</span> : ""}
                </form>
            </div>
        </div>
    )
}

export default Contact
