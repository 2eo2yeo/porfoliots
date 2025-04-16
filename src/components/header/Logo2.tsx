import React from  'react';
import { Logo } from '@interfaces/common';  /* 타입은 별도의 파일로 관리 */

// 1 번째 타입체크 방법
// interface LogoProps {
//     logo: Logo;  /* props 로 넘어온 logo 와 interface로 가져온 Logo가 맞는지 체크 */
// }

// 2번째 타입체크 방법 방법
type LogoProps = {
    logo : Logo
}

const Logo2: React.FC<LogoProps> = ({logo}) => {
    return (
        <div>
            <div className="header__logo">
                <img className="header__logo__img" src={logo.img} alt="logo" />
                <h1 className="header__logo__title">{logo.name}</h1>
            </div>
        </div>
    );
}

export default Logo2;