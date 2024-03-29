import React from "react"

function DiagramButtons (props) {
    return (
        <form>
            <label className="radio-container">
                <input
                    type="radio"
                    name="diagram"
                    value="mo"
                    onChange={props.handler}
                    checked={props.diagram === "mo"}
                />
                MO Diagram
            </label>

            
            <label className="radio-container">
                <input
                    type="radio"
                    name="diagram"
                    value="uv"
                    onChange={props.handler}
                    checked={props.diagram === "uv"}
                />
                UV-Vis Spectrum
            </label>

            <label className="radio-container">
                <input
                    type="radio"
                    name="diagram"
                    value="ir"
                    onChange={props.handler}
                    checked={props.diagram === "ir"}
                />
                IR Spectrum
            </label>

        </form>
    )
}

export default DiagramButtons