import React from 'react'
import Button from "../Button/Button";
import './searchbuttons.css'

const SearchButtons = (props) => {
    return (
            <div className={'search-buttons'}>
                <Button onClick={props.clickSearch}>Grugle Search</Button>
                <Button onClick={props.clickLucky}>I'm feeling lucky.</Button>
            </div>
    )
}

export default SearchButtons
