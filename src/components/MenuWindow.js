import React from "react"

function MenuWindow (props) {
    const imgPath = "./assets/images/" + props.value + ".png"
    // a very long winded way of putting sub tags around all numbers in the molecule.
    // could definitely find a more efficient way to do this.
    function myfunc(char) {
    if (char >= '0' && char <= '9') {
        return((<sub>{char}</sub>))
    } else {
        return(char)
    }
    }

    var mol = props.mol
    var output = mol.split("").map(myfunc)


    return(
        <div className = "menu-window" value={props.value} onClick = {props.exit}>
            <div className = "menu-window-content">
                <div className = "menu-window-content-left">
                    <h2>{output}</h2> 
                </div>
                <div className = "menu-window-content-right">
                    <img src={imgPath} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MenuWindow