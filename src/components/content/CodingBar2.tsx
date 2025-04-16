import React from 'react';

interface CodingBar2Props {
    title: string;
    percent: number;
}

const CodingBar2: React.FC<CodingBar2Props> = ({title, percent}) => {
    return (
        <>
            <div className="bar__metadata"><span>{title}</span><span>{percent}%</span></div>
            <div className="bar__bg"><div className="bar__value" style={{"width": `${percent}%`}}></div></div>
        </>
    );
}

export default CodingBar2;