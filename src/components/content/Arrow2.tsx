import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";


const Arrow2: React.FC = () => {
    return (
        <aside>
            <a className="arrow--up" href="#">
                <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </aside>
    );
}

export default Arrow2;


