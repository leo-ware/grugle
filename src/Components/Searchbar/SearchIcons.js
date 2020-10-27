import React from 'react'
import ThemeContextConsumer from '../../Theme'
import SearchIcon from './searchlogo.svg'
import Tooltip from "react-tooltip";

const TextSearchIcon = (props) => {
    return (
        <div className={'search-logo-container'} onClick={props.onClick}>
            <img className={"search-logo"} id={"search-logo"} alt={"search"} src={SearchIcon}/>
        </div>
    )
}

const VerbalSearchIcon = () => {
    return (
        <ThemeContextConsumer>
            {(colors) => (
                <div id={"voice-search-logo"} className={"voice-search-logo"}>
                    <div data-tip data-for={'voiceSearchTooltip'}>
                        <svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill={colors.blue} d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"/>
                            <path fill={colors.green} d="m11 18.08h2v3.92h-2z"/>
                            <path fill={colors.yellow} d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"/>
                            <path fill={colors.red} d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"/>
                        </svg>
                    </div>
                    <Tooltip
                        id={'voiceSearchTooltip'}
                        place={'bottom'}
                        border={true}
                        effect={'solid'}
                    >
                        Search by voice
                    </Tooltip>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export { VerbalSearchIcon, TextSearchIcon }
