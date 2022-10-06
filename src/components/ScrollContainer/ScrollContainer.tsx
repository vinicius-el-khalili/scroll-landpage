import React from 'react';
type ScrollContainerProps={
    children?:string,
    style?:React.CSSProperties
};
export const ScrollContainer = ({style,children}:ScrollContainerProps) => {
    return(
        <div>
            <div className="ScrollContainer" style={style}>{children}</div>
        </div>
    )
}