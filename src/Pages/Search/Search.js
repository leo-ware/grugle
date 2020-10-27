import React from 'react'
import './search.css'
import {useLocation} from 'react-router-dom'
import SearchTopBanner from "../../Components/SearchTopBanner/SearchTopBanner";
import SearchMenu from "../../Components/SearchMenu/SearchMenu";
import Results from "../../Components/SearchResults/ResultWidget";

const Search = () => {
    // nice, informative title
    const location = useLocation()
    const query = new URLSearchParams(location.search).get('q')
    document.title = (query? query + " - " : "") + "Grugle Search"

    return (
        <div className={'main'}>
            <SearchTopBanner />
            <SearchMenu />
            <Results />
        </div>
    )
}


export default Search
