import React, { useState } from 'react'
import './works.scss'
import { PhoneAndroid, ArrowBackIos } from '@material-ui/icons'
import { slideList } from './slides.js'

const Works = () => {

    const [toggleSlide, setToggleSlide] = useState(0)

    const handleClick = (toggle) => {
        toggle === "left" ? setToggleSlide(toggleSlide > 0 ? toggleSlide - 1 : 2)
            : setToggleSlide(toggleSlide < slideList.length - 1 ? toggleSlide + 1 : 0)
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${toggleSlide * 100}vw)` }}>
                {
                    slideList.map(itm => (
                        <div className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imageContainer">
                                            <PhoneAndroid className="imgicon" />
                                        </div>
                                        <h1>{itm.title}</h1>
                                        <p>{itm.desc}
                                        </p>
                                        <span>{itm.proj}</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={`assets/${itm.img}`} alt="img"></img>
                                </div>
                            </div>

                        </div>

                    ))
                }



            </div>
            <ArrowBackIos className="arrow leftarrow" onClick={() => handleClick("left")} />
            <ArrowBackIos className="arrow rightarrow" onClick={() => handleClick()} />
        </div>
    )
}

export default Works
