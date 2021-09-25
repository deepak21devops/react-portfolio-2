import React from 'react'
import "./portfoliolist.scss"

const PortFolioList = ({ id, title, active, setSelected, selected }) => {


    return (
        <li className={active ? "porfolio active" : "portfolio"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}

export default PortFolioList
