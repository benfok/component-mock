import React from 'react';
import useMedia from '../../hooks/useMedia';
import navPic from '../../assets/vailDesktopMenu.png';
import mobileNav from '../../assets/vailMobileMenu.png';
import mobileLogo from '../../assets/vailLogo.png';
import '../../styles/header.css';

function Header () {

    const isMobile = useMedia('(max-width: 1080px)');

    return (
        <div className="header">
            <div className="heroBackgroundGradient"></div>
            {!isMobile &&
                <>
                    <div className="navPicContainer">
                        <img className="desktopNav" src={navPic} alt="nav-desktop" />
                    </div>
                </>
            }
            {isMobile &&
                <>
                    <div className="navPicContainer">
                        <img src={mobileLogo} alt="logo" />
                        <img className="mobileNav" src={mobileNav} alt="nav-mobile" />
                    </div>
                </>
            }
            <div className="heroTextContainer">
                <div className="heroSub">
                    Vail Resorts Mock Page
                </div>
                <h1>
                    Component Enhancement Examples
                </h1>
                <p>
                    A mock Vail Resorts page usimng existing page structure to showcase suggested changes to existing components, or new components to consider adding to enhance site format interactivity.
                </p>
            </div>
        </div>
    )
}

export default Header;