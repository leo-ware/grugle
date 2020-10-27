import React from 'react'
import ClearButton from './clearButton.png'
import Tooltip from "react-tooltip";

const ClearInputButton = (props) => {
    return (
        <div>
            <div data-tip data-for={'clearInputTooltip'} onClick={props.clearInput}>
                <div className={"clear-input"}>
                    <img src={ClearButton} alt={"clear input"} />
                </div>
            </div>
            <Tooltip
                id={'clearInputTooltip'}
                place={'bottom'}
                effect={'solid'}
                border={true}
            >
                Clear
            </Tooltip>
        </div>
    )
}

export default ClearInputButton
