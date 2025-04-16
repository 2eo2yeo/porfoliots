import React, { useState } from 'react';
import Category2 from './Category2';

const Categories2: React.FC = () => {
    const [selected, setSelected] = useState('All');
        const handleSelected = (name: string) => {
            setSelected(name);
        }
        const categoryList = [
            {
                "name": "All",
                "count": 8
            },
            {
                "name": "Front-end",
                "count": 4
            },
            {
                "name": "Back-end",
                "count": 2
            },
            {
                "name": "Mobile",
                "count": 2
            },
        ];
        return (
            <ul className="categories">
                {categoryList && categoryList.map((category) =>  
                    <li>
                        <Category2 
                                name={category.name}
                                count={category.count}
                                click={handleSelected}
                                style={category.name === selected ?
                                        'category category--selected'
                                        : 'category'
                                }
                                />
                    </li>
                )}
            </ul>
        );
}

export default Categories2;