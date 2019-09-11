import React from "react"

function NavBar (props) {
    const checkpoint_link = "./assets/checkpoint/" + props.molecule + ".fchk"
    return(
        <div className = "nav-bar">
            <div className = "nb1" onClick={props.toMenu}>
                <img src="./assets/images/backarrow.png" alt = ""/>
                <h2>Back to Menu</h2>
            </div>
            <div className = "nb2">
                <h2 onClick={props.handleChangeNavBar} value = "diagrams"> Default View </h2>
            </div>
            <div className = "nb3">
                <h2 onClick={props.handleChangeNavBar} value = "info"> Molecule Info </h2>
            </div>
            <div className = "nb4">
                <h2 onClick={props.handleChangeNavBar} value = "point_group"> Point Group </h2>
            </div>
            <div className = "nb5">
                <a href = {checkpoint_link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    download >.fchk 
                </a>
            </div>
        </div>
    )
}

export default NavBar