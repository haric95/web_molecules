import React from "react"
import mol_data from "./mol_data.js"

function DiagramWindow (props) {
    var img_path = ("./assets/diagrams/" + props.diagram + "/" + props.molecule + "_" + props.diagram + ".png")
    const num_mos = mol_data[props.molecule]["number_mos"]
    const normal_modes = mol_data[props.molecule]["normal_modes"]

    //This if staetment is true if the MO radio button is selected
    if (props.tab === "diagrams" & props.diagram === "mo") {
        //This if statement checks the annotated check box and updates the filepath to the MO if it is checked.
        if (props.mo_annotated === true) {
            img_path = img_path.slice(0, -4) + "_annotated.png";
        }
        //This function is used to make the number of MOs that appear in the dropdown respond to the value in mol_data.js
        //It takes an integer as a number and return a list of JSX options.
        function option_generator(num_mos) {
            let options = []
            options.push(<option value = {""}> Select an MO </option>)
            for (let i = 1; i <= num_mos; i++) {
                options.push(<option value = {i}> {i} </option>)
            }
            return (options)
        }
        return (
            <div className="mo-diagram">
                <img src={img_path} alt={img_path} />
                <form>
                    <select name="mo_no" onChange={props.handler}>
                        {option_generator(num_mos)}
                    </select>
                    <label>
                        <input 
                            type="checkbox" 
                            name = "mo_annotated" 
                            checked = {props.mo_annotated}
                            onChange={props.handler}/>
                        Annotations
                    </label>
                </form>

            </div>

        )

    } else if (props.tab === "diagrams" & props.diagram === "ir") {
        function option_generator(normal_modes) {
            let options = []
            options.push(<option value = {"none"}> Normal Modes </option>)
            for (let i = 0; i < normal_modes; i++) {
                options.push(<option value = {i+1}> {i+1} </option>)
            }
            return (options)
        }
        return (
            <div className="spectrum-container">
                <img src={img_path} alt={img_path} />
                    <select name="normal_mode" onChange={props.handler}>
                    {option_generator(normal_modes)}
                </select>
            </div>
        )

    } else if (props.tab === "diagrams" & props.diagram === "uv") {
        return (
            <div className="spectrum-container">
                <img src={img_path} alt={img_path} />
            </div>
        )

    } else if (props.tab === "info") {
        return (
            <div className="info">
                <p> {mol_data[props.molecule]["info"]}</p>
            </div>
        )

    } else if (props.tab === "point_group") {
        const point_group = mol_data[props.molecule]["point_group"]
        const img_path = "./assets/character_tables/" + point_group + ".png"
        return (
            <div className = "spectrum-container">
                <img alt = "" src = {img_path}/>
            </div>
        )
    }
}

export default DiagramWindow