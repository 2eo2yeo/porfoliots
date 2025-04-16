import React from 'react';
import { Projects } from '@interfaces/common';

type Project2Props = {
    project: Projects;
}


const Project: React.FC<Project2Props> = ({project}) => {
    return (
        <>
            <img className="project__img" src={project.img} alt={project.alt} />
            <div className="project__metadata">
                <h3 className="project__metadata__title">{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </>
    );
}

export default Project;