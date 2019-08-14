import React from "react"

function NavBar (props) {
    return(
        <div className = "nav-bar">
            <div className = "nb1" onClick={props.toMenu}>
                <h2>Back to Menu</h2>
            </div>
            <div className = "nb2">
                
            </div>
            <div className = "nb3">
                
            </div>
            <div className = "nb4">
                
            </div>
            <div className = "nb5">
                <h3>Download the .fchk file</h3>
            </div>
            {/* <button>Testing</button> */}
            {/* <h2 onClick={props.toMenu}>Back to Menu</h2> */}
        </div>
    )
}

export default NavBar