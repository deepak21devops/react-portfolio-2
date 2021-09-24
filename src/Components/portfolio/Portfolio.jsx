import React from 'react'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/web_3.jpg" alt="web"></img>
                    <h1>Banking Application</h1>
                </div>

                <div className="item">
                    <img src="assets/web_4.png" alt="web"></img>
                    <h1>Banking Application</h1>
                </div>
                <div className="item">
                    <img src="assets/web_5.png" alt="web"></img>
                    <h1>Banking Application</h1>
                </div>
                <div className="item">
                    <img src="assets/web_6.jpg" alt="web"></img>
                    <h1>Banking Application</h1>
                </div>
                <div className="item">
                    <img src="assets/web_7.jpg" alt="web"></img>
                    <h1>Banking Application</h1>
                </div>
                <div className="item">
                    <img src="assets/web_8.jpeg" alt="web"></img>
                    <h1>Banking Application</h1>
                </div>
                <div className="item">
                    <img src="assets/web_9.jpg" alt="web"></img>
                    <h1>Banking Application</h1>
                </div>
                <div className="item">
                    <img src="assets/web.jpeg" alt="web"></img>
                    <h1>Banking Application</h1>
                </div>


            </div>
        </div>
    )
}

export default Portfolio
