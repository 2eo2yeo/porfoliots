import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Major2 from './Major2';


const Majors2: React.FC = () => {
    const [majorList, setMajorList] = useState([]);
    useEffect(()=>{
        axios("data/majors.json")
            .then((res) => setMajorList(res.data) )
            .catch((error) => console.log(error));        
    }, []);

        return (
            <ul className="majors">
                {majorList && majorList.map((major)=>
                    
                    <li className="major">
                        <Major2 major={major} /> 
                    </li>            
                )}
            </ul>
        );
}

export default Majors2;