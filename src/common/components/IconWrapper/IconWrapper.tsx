import * as React from 'react';

export interface IIconWrapperProps {
    children: React.ReactNode;
    style?: any
    onClick?: () => void;
}

export function IconWrapper (props: IIconWrapperProps) {
  return (
    <div onClick={props.onClick} style={props.style}>
        {props.children}
    </div>
  );
}
