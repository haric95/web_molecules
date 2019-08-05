import React from "react"
import ThreeD from "./ThreeD"
import DiagramButtons from "./DiagramButtons"
import NavBar from "./NavBar"
import DiagramWindow from "./DiagramWindow"
import Intro from "./Intro"

class AppContainer extends React.Component{
    constructor() {
        super()
        this.state = {
            intro: true,
            molecule:'ch4',
            mo_no: '',
            diagram: "mo",
        }
        this.handleChange = this.handleChange.bind(this)
        this.exit = this.exit.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        console.log(name, value, type, checked)
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    exit(event) {
        this.setState({intro: false})
    }

    render(){
        if (this.state.intro === false) {
            return (
                <div className="wrapper">

                    <div className="nav-bar">
                        <NavBar />
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
                            <DiagramWindow 
                                diagram={this.state.diagram}
                                mo_no =  {this.state.mo_no}
                                molecule ={this.state.molecule} 
                                handler={(event) => this.handleChange(event)}
                            />
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.intro === true) {
            return(
                <Intro exit = {this.exit}/>
            )
        }
    }

}

export default AppContainer