import React from 'react'
import ThemeContextConsumer from '../../Theme'
import './logo.css'

const Logo = (props) => {
    const fontSize = props.fontSize? props.fontSize: "65px"
    return (
        <ThemeContextConsumer>
            {(colors) => (
                <div
                    className={"logo"}
                    onClick={props.onClick}
                    style={props.onClick? {cursor: 'pointer'}: {}}
                >
                    <h1 style={{color: colors.blue, fontSize: fontSize}}>G</h1>
                    <h1 style={{color: colors.red, fontSize: fontSize}}>r</h1>
                    <h1 style={{color: colors.yellow, fontSize: fontSize}}>u</h1>
                    <h1 style={{color: colors.blue, fontSize: fontSize}}>g</h1>
                    <h1 style={{color: colors.green, fontSize: fontSize}}>l</h1>
                    <h1 style={{color: colors.red, fontSize: fontSize}}>e</h1>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Logo
