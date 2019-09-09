import React from "react"
import mol_data from "./mol_data.js"

function DiagramWindow (props) {
    const img_path = ("./assets/diagrams/" + props.diagram + "/" + props.molecule + "_" + props.diagram + ".png")
    const num_mos = parseInt(mol_data[props.molecule]["number_mos"])
    if (props.tab === "diagrams" & props.diagram === "mo") {
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
                </form>

            </div>

        )
    } else if (props.tab === "diagrams" & props.diagram === "ir") {
        return (
            <div className="ir-spectrum-container">
                <img src={img_path} alt={img_path} />
            </div>
        )
    } else if (props.tab === "diagrams" & props.diagram === "uv") {
        return (
            <div className="uv-spectrum-container">
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