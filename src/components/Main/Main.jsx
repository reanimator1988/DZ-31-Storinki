import React from 'react';
import LogoComponent from './Logo.jsx';
import Description from './Description.jsx';
import logo from '../../../static/download.png'

const Main = () => {
    return (
        <div className="main-container">
            <Description></Description>
            <LogoComponent logoSrc={logo} />
        </div>
    );
}

export default Main;
