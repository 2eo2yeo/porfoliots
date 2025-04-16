import React from 'react';

interface Testimonial2Props {
    img: string;
    alt: string;
    description: string;
    name: string;
    company: string;
}

const Testimonial2: React.FC<Testimonial2Props> = ({img, alt, description, name, company}) => {
    return (
        <>
            <img className="testimonial__img" src={img} alt={alt} />
            <div className="testimonial__bubble">
                <p>{description}</p>
                <p><a href="#" className="testimonial__bubble__name">{name}</a> / {company}</p>
            </div>
        </>
    );
}

export default Testimonial2;

