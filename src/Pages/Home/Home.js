import React from 'react'
import './home.css'
import Banner from "../../Components/HomeTopBanner/Banner";
import Logo from "../../Components/Logo/Logo";
import Searchbar from "../../Components/Searchbar/Searchbar";
import BottomBanner from "../../Components/BottomBanner/BottomBanner";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className={'home-main'}>
                <Logo fontSize={'85px'} />
                <Searchbar searchButtons />
            </div>
            <BottomBanner />
        </div>
    )
}

export default Home
