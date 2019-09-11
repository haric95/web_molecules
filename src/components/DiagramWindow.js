import React from "react"
import mol_data from "./mol_data.js"

function DiagramWindow (props) {
    var img_path = ("./assets/diagrams/" + props.diagram + "/" + props.molecule + "_" + props.diagram + ".png")
    const num_mos = mol_data[props.molecule]["number_mos"]
    const ir_peaks = mol_data[props.molecule]["ir_peaks"]

    //This if staetment is true if the MO radio button is selected
    //This intial 
    if (props.tab === "diagrams" & props.diagram === "mo") {
        if (props.mo_annotated === true) {
            img_path = img_path.slice(0, -4) + "_annotated.png";
            console.log(img_path);
        }
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
        function option_generator(ir_peaks) {
            let options = []
            options.push(<option value = {null}> IR Peaks </option>)
            for (let i = 0; i < ir_peaks.length; i++) {
                options.push(<option value = {ir_peaks[i]}> {ir_peaks[i]} </option>)
            }
            return (options)
        }
        return (
            <div className="spectrum-container">
                <img src={img_path} alt={img_path} />
                <select name="ir_peak" onChange={props.handler}>
                    {option_generator(ir_peaks)}
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
        return (
            <div>
                <h2> Point Group Information. </h2>
            </div>
        )
    }
}

export default DiagramWindow