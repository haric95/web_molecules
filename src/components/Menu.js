import React from "react"
import MenuWindow from "./MenuWindow"
import Splitter from "./Splitter"


// Functional Component.
// Only prop it receives is exitMenu, this links back to the exitMenu method in the AppContainer class.

// Splitter used to create dividing line.
// MenuWindow contains two additional attributes.
// value is the string to which the molecule property in AppContainer component is changed to.
// mol is the text which is displayed on screen.
function Menu (props) {
    return (
        <div>
            <div className = "menu-container"> 
            <h1 className = "menu-header"> Select a Molecule </h1>

            <Splitter value = "Small Molecules"/>
            
            <MenuWindow 
                value = "h2o" 
                mol="H2O"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "nh3"
                mol="NH3"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "ch4"
                mol="CH4"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "co2"
                mol="CO2"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "hcl"
                mol="HCl"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "d2o"
                mol="D2O"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "b2h6"
                mol="B2H6"
                exit={props.exitMenu}
            />

            <Splitter value = "Solvents"/> 

            <MenuWindow 
                value = "acetone"
                mol="Acetone"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "dmso"
                mol="DMSO"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "ethanol"
                mol="Ethanol"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "methanol"
                mol="Methanol"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "dimethoxymethane"
                mol="Dimethoxy methane"
                exit={props.exitMenu}
            />


            <Splitter value = "Isomers"/>

            <MenuWindow 
                value = "1,1-ch2cl2"
                mol="1,1-CH2Cl2"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "1,2-c-ch2cl2"
                mol="1,2-cis-CH2Cl2"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "1,2-t-ch2cl2"
                mol="1,2-trans-CH2Cl2"
                exit={props.exitMenu}
            />

            <Splitter value = "Silicon Compounds"/>
            
            <MenuWindow 
                value = "sicl3h"
                mol="SiCl3H"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "sicl4"
                mol="SiCl4"
                exit={props.exitMenu}
            />
            <MenuWindow 
                value = "sicl4"
                mol="SiCl4"
                exit={props.exitMenu}
            />
            
            
            </div>
        </div>
    )
}

export default Menu