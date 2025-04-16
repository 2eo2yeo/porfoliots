import React from 'react';

interface Top2Props {
    title: string;
    description: string;
}

const Top2: React.FC<Top2Props> = ({title, description}) => {
    return (
        <>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
        </>
    );
}

export default Top2;