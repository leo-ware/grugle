import React from 'react';
import './bottombanner.css'

const BottomBanner = () => {
    return (
        <div className={'bottom-banner'}>
            <div className={'bottom-banner-layer'}>
                <p>United Kingdom</p>
            </div>
            <div className={'bottom-banner-layer'}>
                <div className={'bottom-banner-links'}>
                    <a href={'/'}>Advertising</a>
                    <a href={'/'}>Business</a>
                    <a href={'/'}>How Search works</a>
                </div>
                <div className={'bottom-banner-links'}>
                    <a href={'/'}>Privacy</a>
                    <a href={'/'}>Terms</a>
                    <a href={'/'}>Settings</a>
                </div>
            </div>
        </div>
    )
}

export default BottomBanner
