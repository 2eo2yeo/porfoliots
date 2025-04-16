import React from 'react';

interface Job2Props {
    img: string;
    alt: string;
    name: string;
    period: string;
}

const Job2: React.FC<Job2Props> = ({img, alt, name, period}) => {
    console.log(img);
    
    return (
        <>
            <img src={img} alt={alt} />
            <div>
                <p className="job__name">{name}</p>
                <p className="job__period">{period}</p>
            </div>
        </>
    );
}

export default Job2;