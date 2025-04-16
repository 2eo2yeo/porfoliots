import React, { useState, useEffect } from 'react';
import Category2 from './Category2';
import axios from 'axios';


// 아래 style 때문에 타입 체크 해야됨
type Category = {
    name: string;
    count: number;
} 

const Categories2: React.FC = () => {
    
    const [selected, setSelected] = useState('All');
    const [categoryList, setCategoryList] = useState<Category[]>([]); // 아래 style 때문에 타입 체크 해야됨

    useEffect(() => {
        axios("data/category.json")
            .then((res) => {
                setCategoryList(res.data)
            })
            .catch(err => console.log(err))
    }, [])



    const handleSelected = (name: string) => {
        setSelected(name);
    }


        return (
            <ul className="categories">
                {categoryList && categoryList.map((category) =>
                    <li>
                        <Category2
                            category={category}
                            click={handleSelected}
                            style={category.name === selected ?   //category.name 값을 사용하는 경우 타입 정의 필요
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