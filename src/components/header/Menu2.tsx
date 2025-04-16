import React from 'react';
// import { Menu } from '@types/common';

interface MenuProps {
    href: string;
    name: string;
    style?: string;
    click: (name: string) => void;
}

const Menu2: React.FC<MenuProps> = ({ href, name, click, style }) => {
    
    return (
        <a  className={style}
            href={href}
            onClick={()=> { click(name) }}>{name}</a>
    );
}

export default Menu2;