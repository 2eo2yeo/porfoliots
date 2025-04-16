import React, { useState } from 'react';
import { Menu } from '@interfaces/common';
import Menu2 from './Menu2';

interface MenuListProps {
    menuList: Menu[];
}

const MenuList2: React.FC<MenuListProps> = ({menuList}) => {
    const [selected, setSelected] = useState<string>('Home'); // 초기 선택 값

    const handleClick = (name: string) => {
        setSelected(name);
    }

    return (
        <nav>
            <ul className="header__menu">
                {menuList && menuList.map((menu, index) => 
                    <li key={index}>
                        <Menu2 href={menu.href} 
                                name={menu.name}
                                click={handleClick}
                                style={menu.name === selected ? 
                                            'header__menu__item active'
                                        :   'header__menu__item'
                                }                                
                                />
                    </li>                
                )}
            </ul>
        </nav>
    );
}

export default MenuList2;