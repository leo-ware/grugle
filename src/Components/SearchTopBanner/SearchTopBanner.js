import React, {useState} from 'react'
import './searchtopbanner.css'
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import {Redirect} from 'react-router-dom'

const SearchTopBanner = (props) => {
    const [redirect, setRedirect] = useState(false)
    return (
        <div className={'search-top-banner'}>
            {redirect && <Redirect push to={'/'} />}
            <div className={'search-top-banner-left'}>
                <Logo fontSize={'30px'} onClick={() => setRedirect(true)} />
                <Searchbar rearrange />
            </div>
        </div>
    )
}

export default SearchTopBanner
