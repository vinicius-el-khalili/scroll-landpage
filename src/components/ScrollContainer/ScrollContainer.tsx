import React from 'react';
type ScrollContainerProps={
    children?:React.ReactNode,
};
export const ScrollContainer = ({children}:ScrollContainerProps) => {
    return(
        <div className="scrollContainer">{children}</div>
    )
}