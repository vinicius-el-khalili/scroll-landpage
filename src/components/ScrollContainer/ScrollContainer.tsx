import React from 'react';
type ScrollContainerProps={
    children?:React.ReactNode,
};
export const ScrollContainer = ({children}:ScrollContainerProps) => {
    function handleClick(){
        
    }
    return(
        <div className="scrollContainer" onClick={handleClick} >{children}</div>
    )
}