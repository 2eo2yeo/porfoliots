import React from 'react';
import { Testimonial } from '@interfaces/common';

interface Testimonial2Props {
    testimonial: Testimonial;
}

const Testimonial2: React.FC<Testimonial2Props> = ({testimonial}) => {
    return (
        <>
            <img className="testimonial__img" src={testimonial.img} alt={testimonial.alt} />
            <div className="testimonial__bubble">
                <p>{testimonial.description}</p>
                <p><a href="#" className="testimonial__bubble__name">{testimonial.name}</a> / {testimonial.company}</p>
            </div>
        </>
    );
}

export default Testimonial2;

