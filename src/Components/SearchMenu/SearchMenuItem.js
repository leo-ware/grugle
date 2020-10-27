import React from 'react'
import ThemeContextConsumer from "../../Theme";

/**
 *
 * @param {string} props.name
 * @param {JSX.Element} props.icon
 * @param {boolean} props.selected
 * @param {function} props.onClick
 * @returns {JSX.Element}
 * @constructor
 */
const SearchMenuItem = (props) => {
    return (
        <ThemeContextConsumer>
            {(theme) => (
                <div
                    onClick={props.onClick}
                    className={`search-menu-item  ${props.selected? "search-menu-item-selected":""}`}
                    style={{"border-bottom-color": theme.blue}}
                >
                    {props.icon}
                    <p className={"search-menu-item-title"} style={props.selected? {"color": theme.darkblue}:{}}>
                        {props.name}
                    </p>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default SearchMenuItem
