import React, {useState} from 'react'
import Selected from './openmenu_selected.png'
import Unselected from './openmenu_unselected.png'
import Expanded from './appsmenu_expanded.png'
import ReactTooltip from "react-tooltip";
import './appsmenu.css'

const AppsMenu = () => {
    const [appMenuHover, setAppMenuHover] = useState(false)
    return (
        <div className={'apps-menu-container'}>
            <div
                className={'apps-menu'}
                data-tip
                data-clickable
                data-place={"bottom"}
                data-type={"light"}
                data-for={"apps-menu-tooltip"}
                data-effect={"solid"}
                data-offset={"{'top': 10px}"}
                data-border
                data-border-color={"black"}
            >
                <img
                    className={"apps-menu-image"}
                    src={appMenuHover? Selected: Unselected}
                    alt={"user menu"}
                    onMouseEnter={() => setAppMenuHover(true)}
                    onMouseLeave={() => setAppMenuHover(false)}
                />
            </div>
            <ReactTooltip id={"apps-menu-tooltip"}>
                <img className={"apps-menu-image-expanded"} src={Expanded} alt={"application menu"}/>
            </ReactTooltip>
        </div>
    )
}

export default AppsMenu
