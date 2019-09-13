import React from "react"
import ThreeD from "./ThreeD"
import DiagramButtons from "./DiagramButtons"
import NavBar from "./NavBar"
import DiagramWindow from "./DiagramWindow"
import Intro from "./Intro"
import Menu from "./Menu"

// Class-based component with state, that tell the page what to render.


class AppContainer extends React.Component{
    constructor() {
        // Call to super is required to initiate state in a class-based component.
        super();
        // To deactivate intro, just set the default state of intro to false below.
        this.state = {
            intro: false,
            menu: true,
            molecule:'',
            diagram: "mo",
            mo_no: '',
            mo_annotated: false,
            ir_peak: null,
            tab: "diagrams"
        }
        
        // Class methods must be bound for them to work properly.
        // If a new methods needs to be added, remember to bind it using the same syntax as below.
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeNavBar = this.handleChangeNavBar.bind(this)
        this.exitIntro = this.exitIntro.bind(this)
        this.exitMenu = this.exitMenu.bind(this)
        this.toMenu = this.toMenu.bind(this)

    }

    // This is the general method to handle user interaction on the page.
    // Child components will have onChange or onClick methods etc. that will trigger an event.
    // These events will be given a name, value etc.
    // This method will change the state of the AppContainer component in the appropriate way to respond to these events.
    // The name variable corresponds the the property in state that is to be changed.
    // The value attribute is the value to which this property should be changed.
    // For example, when an instance of the MO dropdown is clicked, it changes the state of the "mo" property to the corresponding number of the mo.
    // Ideally, this method should be used to handle all changes, and the 4 methods below should not need to be written explicitly.
    // This could be fixed going forward.

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    // These are more explicit methods that handle changes to specific 
    // Eg. handleChangeNavBar changes the state of the "tab" property to the value that is clicked on.
    // The event arguments is an object which comes from whichever component triggers the event.
    // It contains information about what was clicked etc.
    handleChangeNavBar(event) {
        const tab = event.currentTarget.attributes.getNamedItem("value").value
        this.setState({tab: tab})
    }

    // Handles change of state when the intro page is clicked, taking user to the menu by changing AppContainer state.
    exitIntro(event) {
        this.setState({intro: false, menu: true})
    }

    // Handles change of state when a MenuWindow is clicked, changes molecule property to the appropriate string and sets menu to false.
    exitMenu(event) {
        const mol = event.currentTarget.attributes.getNamedItem("value").value
        this.setState({menu: false, molecule: mol})
    }

    // This is used when the Back To Menu button in the NavBar is pressed.
    // It sets the state such that the menu is rendered and also resets which tab and diagram is being shown.
    // If you would like the tab and diagram to not change when the user goes back to menu then alter this function. 
    toMenu() {
        this.setState({
            intro: false, 
            menu: true,
            diagram: "mo",
            tab: "diagrams",
            mo_annotated: false,
            ir_peak: null
        })
    }

    // This is where the rendering happens.
    // It checks the values in state to determine what child components should be rendered.
    // (Conditional Rendering)

    // Renders the Intro component if this.state.intro === true
    render(){
        if (this.state.intro === true) {
            return(
                <Intro exitIntro = {this.exitIntro}/>
            )
        }
        
        // Renders the Menu Component if condition above is false and this.state.menu === true
        else if (this.state.menu === true) {
            return (
                <Menu exitMenu = {event => this.exitMenu(event)}/>
            )
        }
        
        // Renders the main part of the website only if two conditions above are false.
        // ie neither the intro or menu are active.
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
                                diagram = {this.state.diagram}
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
                                    mo_annotated = {this.state.mo_annotated}
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


// Export statement required for all components.
export default AppContainer