import React from 'react';

const Article2: React.FC<{type: string}> = ({type}) => {
    const data = {
        "tools": [
            "Visual Studio Code",
            "IntelliJ",
            "Android Studio Code",
            "iOS development tools",
            "Eclipse"
        ],
        "etc":[
            "Git",
            "Scrum Master",
            "SVN"
        ]
    }; 

    return (
        <article className="skills__tools">
            <h3 className="skill__title">{type}</h3>
            <ul>
                {type === 'Tools' ? 
                    data.tools.map(item =>
                        <li>{item}</li>
                    )
                    : data.etc.map(item => 
                        <li>{item}</li>
                    )
                }                
            </ul>
        </article>
    );
}

export default Article2;