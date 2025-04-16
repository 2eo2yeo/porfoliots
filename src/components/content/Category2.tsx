import React from 'react';

interface Category2Props {
    name: string;
    count: number;
    style: string;
    click: (name: string) => void;
}

const Category2: React.FC<Category2Props> = ({name, count, style, click}) => {
    return (
        <button className={style}
                onClick={()=>{click(name)} }
        >{name}<span className="category__count">{count}</span></button>
    );
}

export default Category2;