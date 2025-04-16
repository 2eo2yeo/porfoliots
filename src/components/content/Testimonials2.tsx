import React, { useEffect, useState } from 'react';
import Testimonial2 from './Testimonial2';
import axios from 'axios';

const Testimonials2: React.FC = () => {


    const [testimonialList, setTestimonialList] = useState([]); 

    
    useEffect(()=>{
        axios("data/testimonial.json")
        .then((res) => setTestimonialList(res.data) )
        .catch((error) => console.log(error));        
    },[])



        return (
            <ul className="testimonials">
                {testimonialList && testimonialList.map((testimonial) => 
                    <li className="testimonial">
                        <Testimonial2 
                            testimonial={testimonial}
                            />
                    </li>            
                )}
            </ul>
        );
}

export default Testimonials2;