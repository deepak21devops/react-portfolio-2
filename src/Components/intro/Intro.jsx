import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { ArrowDownward } from '@material-ui/icons'
import { init } from 'ityped'


const Intro = () => {

    const textRef = useRef()


    useEffect(() => {
        init(textRef.current,
            {
                showCursor: true,
                // backDelay: 600,
                backSpeed: 60,
                strings: ['Developer', 'Designer', 'Creator']
            })
    }, [])
    return (
        <div className="intro" id="home">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man.png" alt="man"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Hi There, I'm</h1>
                    <h2>Deepak Kumar Bakki</h2>
                    <h3>Application <span ref={textRef}></span></h3>

                </div>
                <div className="arrow">
                    <a href="#portfolio"><ArrowDownward class="icon" /></a>
                </div>

            </div>
        </div>
    )
}

export default Intro
