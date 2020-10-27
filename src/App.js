import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { ThemeContextProvider } from './Theme'
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";

const App = () => {
    document.title = "Grugle"
    return (
        <ThemeContextProvider>
            <Router>
                <Switch>
                    <Route exact path={"/"}><Home /></Route>
                    <Route path={"/search"}><Search /></Route>
                </Switch>
            </Router>
        </ThemeContextProvider>
    )
}

export default App;
