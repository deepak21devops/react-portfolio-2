import React from 'react'
import './testimonials.scss'
import { Twitter, ArrowBack } from '@material-ui/icons'

const Testimonials = () => {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card ">
                    <div className="top">
                        <ArrowBack className="left" />
                        <div className="user">
                            <img src="/assets/p_1.jpg" alt="woman"></img>
                        </div>
                        <Twitter className="right" />
                    </div>
                    <div className="center">
                        <h1>This is the testimonials page. So please follow the clients feedback
                            about the products we work on.</h1>
                    </div>
                    <div className="bottom">
                        <h1>Alissa Lynch</h1>
                        <h2>Senior Developer</h2>
                    </div>
                </div>

                <div className="card featured">
                    <div className="top">
                        <ArrowBack className="left" />
                        <div className="user">
                            <img src="/assets/p_2.jpg" alt="woman"></img>
                        </div>
                        <Twitter className="right" />
                    </div>
                    <div className="center">
                        <h1>This is the testimonials page. So please follow the clients feedback
                            about the products we work on.</h1>
                    </div>
                    <div className="bottom">
                        <h1>Katherina Petrova</h1>
                        <h2>Data Analyst</h2>
                    </div>
                </div>

                <div className="card ">
                    <div className="top">
                        <ArrowBack className="left" />
                        <div className="user">
                            <img src="/assets/p_2.jpg" alt="woman"></img>
                        </div>
                        <Twitter className="right" />
                    </div>
                    <div className="center">
                        <h1>This is the testimonials page. So please follow the clients feedback
                            about the products we work on.</h1>
                    </div>
                    <div className="bottom">
                        <h1>Elina Gilbert</h1>
                        <h2>Application Developer</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
