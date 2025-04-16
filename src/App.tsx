import './App.css';
import './css/style.css';

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Logo2 from './components/header/Logo2';
import MenuList2 from './components/header/MenuList2';
import ToggleButton2 from './components/header/ToggleButton2';
import Content from './components/Content';
import SectionWrap2 from './components/content/SectionWrap2';
import Home2 from './components/content/Home2';
import Majors2 from './components/content/Majors2';
import Jobs2 from './components/content/Jobs2';
import Skills2 from './components/content/Skills2';
import Coding2 from './components/content/Coding2';
import Article2 from './components/content/Article2';
import Categories2 from './components/content/Categories2';
import Projects2 from './components/content/Projects2';
import Testimonials2 from './components/content/Testimonials2';
import Arrow2 from './components/content/Arrow2';
import Footer from './components/Footer';
import Top2 from './components/footer/Top2';
import ContactLinks2 from './components/footer/ContactLinks2';
import Bottom2 from './components/footer/Bottom2';
import axios from 'axios';

function App() {

  interface Section {    
      id: string,
      title: string,
      description: string,
      children: ComponentNode[]  
  }

  interface ComponentNode {
    component: string;
    props?: Record<string, any>;
    children?: ComponentNode[];
  }

  const [sectionList, setSectionList] = useState<Section[]>([]);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
          Promise.all([
            axios("data/section_list.json"),
            axios("data/menu_list.json")
          ])
          .then(([sectionRes, menuRes]) => {
            setSectionList(sectionRes.data);
            setMenuList(menuRes.data);
          })
          .catch((error) => { console.log(error)});
  }, []);

  const logoData = {
    img:"images/alex.jpg",  
    name:"Alex" 
  }

  //자식 컴포넌트 맵
  const componentMap: Record<string, React.ElementType> = {
      Majors2,
      Jobs2,
      Skills2,
      Coding2,
      Article2,
      Categories2,
      Projects2,
      Testimonials2
    };

  //자식 컴포넌트 렌더링 :: 재귀함수
  const renderComponent = (childObj: ComponentNode): React.ReactNode => {  
    const Component = componentMap[childObj.component]; 
    if (!Component) return null;

    return (
      <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
        {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
      </Component>
    );
  };


  return (
    <>   
      <Header>
        <Logo2  logo={logoData}/>
        <MenuList2 menuList={menuList} />
        <ToggleButton2 />
      </Header>
      <Content>
        <Home2 logo={logoData}/>

        {sectionList && sectionList.map((section) => ( 
          
          <SectionWrap2
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            {section.children.map((child) => renderComponent(child))}

          </SectionWrap2>
        ))}   

        <Arrow2 />
      </Content>
      <Footer>
        <Top2
          title="Let's talk"
          description="jeon.developer.judy@gmail.com"
          />
        <ContactLinks2 />
        <Bottom2 />
      </Footer>
    </>
  );
}

export default App;
