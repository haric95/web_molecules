import React from "react"

function DiagramWindow (props) {
    const img_path = ("./assets/diagrams/" + props.molecule + "_" + props.diagram + ".png")
    if (props.tab === "diagrams" & props.diagram === "mo") {
        return (
            <div className="mo-diagram">
                <img src={img_path} alt={img_path} />
                <form>
                    <label>
                        <input
                            type="radio"
                            name="mo_no"
                            value=""
                            onChange={props.handler}
                            checked={props.mo_no === ""}
                        />
                        Remove MOs
                </label>
                    <label>
                        <input
                            type="radio"
                            name="mo_no"
                            value="1"
                            onChange={props.handler}
                            checked={props.mo_no === "1"}
                        />
                        MO 1
                </label>
                    <label>
                        <input
                            type="radio"
                            name="mo_no"
                            value="2"
                            onChange={props.handler}
                            checked={props.mo_no === "2"}
                        />
                        MO 2
                </label>
                    <label>
                        <input
                            type="radio"
                            name="mo_no"
                            value="3"
                            onChange={props.handler}
                            checked={props.mo_no === "3"} />
                        MO 3
                </label>
                    <label>
                        <input
                            type="radio"
                            name="mo_no"
                            value="4"
                            onChange={props.handler}
                            checked={props.mo_no === "4"} />
                        MO 4
                </label>
                    <label>
                        <input
                            type="radio"
                            name="mo_no"
                            value="5"
                            onChange={props.handler}
                            checked={props.mo_no === "5"} />
                        MO 5
                </label>
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
                <p> This is some placeholder text about the molecule.</p>
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