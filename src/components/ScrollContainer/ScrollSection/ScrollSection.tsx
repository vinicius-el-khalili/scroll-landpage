import React from 'react';
type ScrollSectionProps={
    children:React.ReactNode,
    style?:React.CSSProperties
};
export const ScrollSection = ({children,style}:ScrollSectionProps) => {
    return(
        <div className="scrollSection" style={style}>
            {children}
        </div>
    )
}