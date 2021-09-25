import React, { useState, useEffect } from 'react'
import PortFolioList from '../portfoliolist/PortFolioList'
import './portfolio.scss'

import { Featured, WebApp, MobileApp, DesignApp, Branding } from '../../data.js'

const Portfolio = () => {

    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const ListItem = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web app",
            title: "Web App"
        },
        {
            id: "mobile app",
            title: "Mobile App"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ]

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(Featured)
                break
            case "web app":
                setData(WebApp)
                break
            case "mobile app":
                setData(MobileApp)
                break
            case "design":
                setData(DesignApp)
                break
            case "branding":
                setData(Branding)
                break
            default:
                setData(Featured)
        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {ListItem.map(item => (
                    <PortFolioList
                        id={item.id}
                        title={item.title}
                        active={item.id === selected}
                        setSelected={setSelected}
                        selected={selected}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(itm => (
                    <div className="item" id={itm.id}>
                        <img src={`/assets/${itm.img}`} alt="web"></img>
                        <h1>{itm.title}</h1>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Portfolio
