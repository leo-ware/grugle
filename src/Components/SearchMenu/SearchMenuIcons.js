import React from 'react'
import ThemeContextConsumer from "../../Theme";

// construct the untheme
const grayTheme = {}
Array(['red', 'green', 'yellow', 'blue']).map((item) => grayTheme[item] = 'gray')

/**
 * Supplies variable color context to children based on props.selected
 * @param {boolean} props.selected - whether to supply color (true) or grayscale (false) to child, defaults to true
 * @param {function} props.children - lazy loaded JSX which takes theme object as input
 * @returns {JSX.Element}
 */
const FillIcon = (props) => {
    return (
        <ThemeContextConsumer>
            {(theme) => props.children(!props.selected? grayTheme: theme)}
        </ThemeContextConsumer>
    )
}

/**
 * Generates an svg text search icon
 * @param {boolean} props.selected - whether to color the element
 * @returns {JSX.Element}
 */
export const TextSearchIcon = (props) => (
    <FillIcon selected={props.selected}>
        {(theme) => (
            <div className={"search-icon text-search-icon"}>
                <svg focusable="false" viewBox="0 0 24 24">
                    <path fill={theme.red} d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"/>
                    <path fill={theme.green} d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"/>
                    <path fill={theme.blue} d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"/>
                    <path fill={theme.yellow}
                          d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"/>
                </svg>
            </div>
        )}
    </FillIcon>
)

/**
 * Generates an svg news search icon
 * @param {boolean} props.selected - whether to color the element
 * @returns {JSX.Element}
 */
export const NewsSearchIcon = (props) => (
    <FillIcon selected={props.selected}>
        {(theme) => (
            <div className={"search-icon news-search-icon"}>
                <svg focusable="false" viewBox="0 0 24 24">
                    <path fill={theme.red} d="M22 12h-2v6.22c-.07.48-.51.82-1 .78h-7v2h7c1.59.05 2.92-1.17 3-2.76V12"/>
                    <path fill={theme.blue} d="M19 3h-7v2h7c.49-.04.92.3 1 .78V12h2V5.76A2.93 2.93 0 0 0 19 3"/>
                    <path fill={theme.green} d="M12 3H5a2.93 2.93 0 0 0-3 2.76V12h2V5.78A.94.94 0 0 1 5 5h7V3"/>
                    <path fill={theme.yellow} d="M4 12H2v6.24A2.916 2.916 0 0 0 5 21h7v-2H5c-.49.04-.92-.3-1-.78L4.01 12"/>
                    <path fill={theme.blue} d="M10 7H6v6h4V7m8 4h-6v2h6v-2m0 4H6v2h12v-2m0-8h-6v2h6V7"/>
                </svg>
            </div>
        )}
    </FillIcon>
)

/**
 * Generates an svg image search icon
 * @param {boolean} props.selected - whether to color the element
 * @returns {JSX.Element}
 */
export const ImageSearchIcon = (props) => (
    <FillIcon selected={props.selected}>
        {(theme) => (
            <div className={"search-icon image-search-icon"}>
                <svg className="DCxYpf" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" clip-rule="evenodd" d="M0 0h24v24H0z"/>
                    <path fill={theme.blue} fill-rule="evenodd" clip-rule="evenodd"
                          d="M19 22h-7v-2h7c.55 0 1-.46 1-1V5a1 1 0 0 0-1-.99L12 4V2h7c1.66 0 3 1.36 3 3v14c0 1.65-1.35 3-3 3"/>
                    <path fill={theme.red} fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 22H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h7v2H5c-.55 0-.99.45-.99 1L4 19c0 .55.45 1 1 1h7v2z"/>
                    <path fill={theme.green} fill-rule="evenodd" clip-rule="evenodd" d="M14 13l-2.25 2.75L10 14l-4 4h12z"/>
                    <path fill={theme.yellow} fill-rule="evenodd" clip-rule="evenodd"
                          d="M10 8c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.09.9-2 2-2s2 .9 2 2"/>
                </svg>
            </div>
        )}
    </FillIcon>
)

/**
 * Generates an svg video search icon
 * @param {boolean} props.selected - whether to color the element
 * @returns {JSX.Element}
 */
export const VideoSearchIcon = (props) => (
    <FillIcon selected={props.selected}>
        {(theme) => (
            <div className={"search-icon video-search-icon"}>
                <svg focusable="false" viewBox="0 0 24 24">
                    <path fill={theme.blue} d="M10 16.5l6-4.5-6-4.5"/>
                    <path fill={theme.red} d="M20 12h2v7.5a2.5 2.5 0 0 1-2.5 2.5H12v-2h7a1 1 0 0 0 1-1v-7"/>
                    <path fill={theme.yellow} d="M20 12V5a1 1 0 0 0-1-1h-7V2h7.6A2.4 2.4 0 0 1 22 4.4V12h-2"/>
                    <path fill={theme.green} d="M12 20v2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2H12v2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7"/>
                </svg>
            </div>
        )}
    </FillIcon>
)

/**
 * Generates an svg video search icon
 * @param {boolean} props.selected - whether to color the element
 * @returns {JSX.Element}
 */
export const ShoppingSearchIcon = (props) => (
    <FillIcon selected={props.selected}>
        {(theme) => (
            <div className={"search-icon video-search-icon"}>
                <svg focusable="false" viewBox="0 0 24 24">
                    <path fill={theme.red} d="M8.65 8.04l-1.4-1.41 3.74-3.74c.58-.58 1.35-.89 2.16-.89h5.8c.82 0 1.58.31 2.16.89L19.69 4.3c-.2-.2-.47-.31-.74-.31l-5.8.01c-.28 0-.54.1-.74.3L8.65 8.04"/>
                    <path fill={theme.yellow} d="M5.8 18.2l-2.9-2.9c-1.19-1.19-1.19-3.12 0-4.32l4.36-4.36 1.4 1.41-4.35 4.37c-.41.41-.41 1.08 0 1.49l2.9 2.9L5.8 18.2"/>
                    <path fill={theme.blue} d="M21.11 2.89L19.69 4.3c.21.21.31.48.31.75v5.8c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9L5.8 18.2l2.89 2.9c.6.6 1.38.9 2.16.9.78 0 1.56-.29 2.16-.89l4.36-4.36 3.73-3.74c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16"/>
                    <circle fill={theme.green} cx="16" cy="8" r="2"/>
                </svg>
            </div>
        )}
    </FillIcon>
)
