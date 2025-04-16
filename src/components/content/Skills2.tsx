import React from 'react';

interface Skills2Props {    
    id: string,
    title: string,
    description: string,
    children: React.ReactNode[]  
}

interface ComponentNode {
    component: string;
    props?: Record<string, any>;
    children?: React.ReactNode[];
}

const Skills2: React.FC<Skills2Props> = ({children}) => {
    console.log(children);
    
    return (
        <div className="skills">
            {children}
        </div>
    );
}

export default Skills2;