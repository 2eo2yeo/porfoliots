import React from  'react';
import { Logo } from '@interfaces/common';

interface LogoProps {
    logo: Logo;
}

const Logo2: React.FC<LogoProps> = ({logo}) => {
    return (
        <div>
            <div className="header__logo">
                <img className="header__logo__img" src={logo.img} alt="logo" />
                <h1 className="header__logo__title">{logo.name}</h1>
            </div>
        </div>
    );
}

export default Logo2;