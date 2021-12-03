import * as React from 'react';

export interface IIconWrapperProps {
    children?: React.ReactNode;
    style?: any
}

export function IconWrapper (props: IIconWrapperProps) {
  return (
    <div style={props.style}>
        {props.children}
    </div>
  );
}
