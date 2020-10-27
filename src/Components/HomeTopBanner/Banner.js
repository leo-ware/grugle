import React from "react";
import './banner.css'
import AppsMenu from "../UserMenu/AppsMenu";
import Button from "../Button/Button";

const Banner = () => {
    return (
        <div className={'banner'}>
            <div className={'banner-links banner-links-left'}>
                <a href={'/'}>About</a>
                <a href={'/'}>Store</a>
            </div>
            <div className={'banner-shim'} />
            <div className={'banner-links banner-links-right'}>
                <a href={'/'}>Gmail</a>
                <a href={'/'}>Images</a>
            </div>
            <AppsMenu />
            <div className={'profile-menu'}>
                <Button className={'sign-in-button'} type={'emphasis'} minHeight={'30px'} minWidth={'70px'}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Banner
