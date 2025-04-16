import React from 'react';
// import { SectionWrap } from '@interfaces/common';

interface SectionWrap2Props {    
    id: string,
    title: string,
    description: string,
    children:React.ReactNode  
}


const SectionWrap2: React.FC<SectionWrap2Props> = ({id, title, description, children}) => {
    return (
        <section id={id} className="section max-container">
            <h2 className="title">{title}</h2>
            {id === 'skill' && <p className="description">Skills & Attributes</p>}
            {id === 'skill' ? <p>{description}</p>
                : <p className="description">{description}</p> }
            {children}            
        </section>
    );
}

export default SectionWrap2;