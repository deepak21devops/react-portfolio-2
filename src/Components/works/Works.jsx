import React from 'react'
import './works.scss'
import { PhoneAndroid } from '@material-ui/icons'

const Works = () => {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imageContainer">
                                    <PhoneAndroid className="imgicon"/>
                                </div>
                                <h1>Title</h1>
                                <p>We have what we want but we can't get what we need.
                                    We have what we want but we can't get what we need
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
