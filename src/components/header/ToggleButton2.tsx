import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ToggleButton2: React.FC = () => {
    return (
        <button id="menu_toggle" className="header__toggle" aria-label="navigation menu toggle">
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
}

export default ToggleButton2;