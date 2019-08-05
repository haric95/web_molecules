import React from "react"

function DiagramWindow(props) {
    const img_path = ("./assets/diagrams/" + props.molecule + "_" + props.diagram + ".png")
    return (
        <div>
            <h1>{props.mo_no} </h1>
            <img src = {img_path} alt = {img_path}/>
            <form>
                <label>
                    <input 
                        type="radio"
                        name="mo_no"
                        value ="1"
                        onChange = {props.handler} 
                        checked={props.mo_no === "1"}
                        /> 
                    MO 1
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="mo_no"
                        value ="2"
                        onChange={props.handler} 
                        checked={props.mo_no === "2"}
                        /> 
                    MO 2
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="mo_no"
                        value ="3"
                        onChange={props.handler} 
                        checked={props.mo_no === "3"}/> 
                    MO 3
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="mo_no"
                        value ="4"
                        onChange={props.handler} 
                        checked={props.mo_no === "4"}/> 
                    MO 4
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="mo_no"
                        value ="5"
                        onChange={props.handler} 
                        checked={props.mo_no === "5"}/> 
                    MO 5
                </label>
            </form>
            
        </div>
    ) 
}

export default DiagramWindow