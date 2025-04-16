import React from 'react';

const Content: React.FC<React.PropsWithChildren> = ({children}) => {
// export default function Content({children}) {    
    return (
        <div>
            {children}
        </div>
    );
}

export default Content;