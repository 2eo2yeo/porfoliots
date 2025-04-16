import React from 'react';

interface Project2Props {
    img: string;
    alt: string;
    title: string;
    description: string;
}

const Project: React.FC<Project2Props> = ({img, alt, title, description}) => {
    return (
        <>
            <img className="project__img" src={img} alt={alt} />
            <div className="project__metadata">
                <h3 className="project__metadata__title">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}

export default Project;