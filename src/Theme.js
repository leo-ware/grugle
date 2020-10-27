import React from "react";

const colors = {
    'red': '#EA4335',
    'blue': '#4285F4',
    'darkblue': '#1a73e8',
    'yellow': '#FBBC05',
    'green': '#34A853'
}

const Context = React.createContext(colors);

const ThemeContextProvider = (props) => {
    return <Context.Provider value={colors}>{props.children}</Context.Provider>
}
const ThemeContextConsumer = Context.Consumer

export { ThemeContextProvider }
export default ThemeContextConsumer
