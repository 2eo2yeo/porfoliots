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
    // const majorList = [
    //         {
    //             "icon": "html",
    //             "title": "Front-end",
    //             "subjects": "HTML, CSS, JavaScript, TypeScript, React, WebAPIs"            
    //         },
    //         {
    //             "icon": "mobile",
    //             "title": "Mobile",
    //             "subjects": "Android Studio, React Native, iOS, Swift, Java, Kotlin"            
    //         },
    //         {
    //             "icon": "server",
    //             "title": "Back-end",
    //             "subjects": "Java, JavaScript, Go, Kotlin, Spring, Spring Boot"            
    //         }
    //     ];
        return (
            <ul className="majors">
                {majorList && majorList.map((major)=>
                    
                    <li className="major">
                        <Major2 major={major} />
                        {/* <Major2 icon={major.icon} 
                                title={major.title} 
                                subjects={major.subjects} /> */}
                    </li>            
                )}
            </ul>
        );
}

export default Majors2;