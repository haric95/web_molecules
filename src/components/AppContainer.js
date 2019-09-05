import React from "react"
import ThreeD from "./ThreeD"
import DiagramButtons from "./DiagramButtons"
import NavBar from "./NavBar"
import DiagramWindow from "./DiagramWindow"
import Intro from "./Intro"
import Menu from "./Menu"

class AppContainer extends React.Component{
    constructor() {
        super()
        this.state = {
            intro: true,
            menu: true,
            molecule:'',
            diagram: "mo",
            mo_no: '',
            tab: "diagrams"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeNavBar = this.handleChangeNavBar.bind(this)
        this.exitIntro = this.exitIntro.bind(this)
        this.exitMenu = this.exitMenu.bind(this)
        this.toMenu = this.toMenu.bind(this)

    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        console.log(event.target)
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleChangeNavBar(event) {
        const tab = event.currentTarget.attributes.getNamedItem("value").value
        this.setState({tab: tab})
    }

    exitIntro(event) {
        this.setState({intro: false, menu: true})
    }

    exitMenu(event) {
        const mol = event.currentTarget.attributes.getNamedItem("value").value
        this.setState({menu: false, molecule: mol})
    }

    toMenu() {
        this.setState({intro: false, menu: true})
    }


    render(){
        if (this.state.intro === true) {
            return(
                <Intro exitIntro = {this.exitIntro}/>
            )
        }
        
        else if (this.state.menu === true) {
            return (
                <Menu exitMenu = {event => this.exitMenu(event)}/>
            )
        }

        else {
            return (
                <div className="wrapper">
                    <div className="nav-bar-container">
                        <NavBar 
                            toMenu={this.toMenu} 
                            handleChangeNavBar={this.handleChangeNavBar}
                            molecule={this.state.molecule}/>
                    </div>

                    <div className="content">
                        <div className="left">
                            <div className="molecule-canvas">
                                <ThreeD 
                                molecule = {this.state.molecule} 
                                mo_no = {this.state.mo_no} 
                                />
                            </div>

                            <div className="button-panel">
                                <DiagramButtons 
                                    diagram={this.state.diagram} 
                                    handler={(event) => this.handleChange(event)}
                                />
                            </div>

                        </div>

                        <div className="right">
                            <div className = "diagram">
                                <DiagramWindow 
                                    tab={this.state.tab}
                                    diagram={this.state.diagram}
                                    mo_no =  {this.state.mo_no}
                                    molecule ={this.state.molecule} 
                                    handler={(event) => this.handleChange(event)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
    }

}

export default AppContainer