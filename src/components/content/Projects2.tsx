import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Project2 from './Project2';


const Projects2: React.FC = () => {
    const [projectList, setProducList ] = useState([]);


    useEffect(()=>{
        axios("data/project.json")
        .then((res) =>{
            setProducList(res.data)
            } )
            .catch(err => console.log(err))
    },[])

    
        return (
            <ul className="projects">
                {projectList && projectList.map((project) => 
                    <li className="project">
                        <Project2
                            project={project}
                            />
                    </li>            
                )}
            </ul>
        );
}

export default Projects2;