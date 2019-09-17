import React from "react"

//Functional component that renders the boxes on the menu.
// Receives the props that determine which molecule the window contains.


function MenuWindow (props) {
    // filepath created from the value prop
    const imgPath = "./assets/images/" + props.value + ".png"
    // This function puts sub tags around the input if it is a number.
    function myfunc(char) {
    if (char >= '0' && char <= '9') {
        return((<sub>{char}</sub>))
    } else {
        return(char)
    }
    }
    // myfunc is used to map the molecule string to a new string that has sub tags around each number.
    // This will need fixing so that numbers which dictate isomerism / functionality positions don't have sub tags around them.
    var mol = props.mol
    var output = mol.split("").map(myfunc)

    // This returns the window, getting image from imgPath.
    // When it is clicked, the exitMenu method in AppContainer is triggered, taking the event as an argument.
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