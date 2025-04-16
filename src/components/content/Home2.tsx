import React from 'react';
import { Logo } from '@interfaces/common';

interface HomeProps {
    logo: Logo;
}

const Home2: React.FC<HomeProps> = ({logo}) => {
    return (
        <div>
            <section id="home">
            <img className="home__avatar" src={logo.img} alt="portfolio" />
            <h2 className="home__title">Hello <br/> I'm 
                <strong className="home__title--strong"> Typescript Developer</strong>, {logo.name}</h2>
            <p className="home__description">A software engineer currently residing in Seoul, South Korea</p>
            <a className = "home__contact" href="#contact">Contact Me</a>
        </section>
        </div>
    );
}

export default Home2; 