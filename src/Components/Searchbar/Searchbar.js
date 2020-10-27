import React, { useState } from 'react'
import './searchbar.css'
import SearchInput from "./SearchInput";
import ClearInputButton from "./ClearInputButton/ClearInputButton";
import SearchButtons from "../SearchButtons/SearchButtons";
import { VerbalSearchIcon, TextSearchIcon } from "./SearchIcons";
import { Redirect } from "react-router-dom";

const Searchbar = (props) => {

    // it's a controlled form
    const [getQuery, setQuery] = useState('')
    const onChange = (event) => {setQuery(event.target.value)}
    const clearInput = () => {setQuery('')}

    // redirect handling
    const [redirect, setRedirect] = useState(false)
    const doSearch = () => getQuery && setRedirect(true)
    if (redirect){return <Redirect push to={`/search?q=${encodeURI(getQuery)}`} />}
    
    return (
        <div className={'searchbar-container'}>
            <div
                className={'searchbar'}
                onKeyDown={(e) => e.keyCode===13? doSearch(): null}
            >
                <TextSearchIcon style={{order: props.rearrange? 1:0}} onClick={doSearch} />
                <SearchInput getQuery={getQuery} onChange={onChange} />
                {getQuery.length > 0 && <ClearInputButton clearInput={clearInput} />}
                <VerbalSearchIcon />
            </div>
            {props.searchButtons && <SearchButtons clickSearch={doSearch} clickLucky={() => alert("Good for you")}/>}
        </div>
    )
}

export default Searchbar
