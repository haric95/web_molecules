import React from "react"

function Intro(props) {
    return(
        <div onClick={props.exitIntro}className = "intro">
            <div className= "image-container">
                <div className="block-4"></div>
                <div className="block-3"></div>
                <div className="block-2"></div>
                <div className="block-1"></div>
                <img src="./assets/images/banner.png" alt = ""/>
            </div>
        </div>
    )
}

export default Intro