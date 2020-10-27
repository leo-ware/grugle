import React from 'react'
import './button.css'

const Button = (props) => {
    const type = props.type? props.type: 'basic'
    const style = {
        minHeight: props.minHeight? props.minHeight: '36px',
        minWidth: props.minWidth? props.minWidth: '128px'
    }

    return (
        <button style={style} onClick={props.onClick} className={`${props.className} button button-${type}`}>
            { props.children }
        </button>
    )
}

export default Button
