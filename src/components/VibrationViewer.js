import React from "react"


function VibrationViewer (props) {
    let img_path;
    if (props.normal_mode === "none") {
        img_path = "./assets/vibrations/" + props.mol + "/still.png"
    } else {
        img_path = "./assets/vibrations/" + props.mol + "/" + props.normal_mode + ".gif"
    }

    return (
        <div className = "vibrations"> 
            <img src = {img_path} alt = ""/>
        </div>
    )
     
}

export default VibrationViewer