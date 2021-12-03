import * as React from 'react';

export interface ISelectIconProps {
}

export function SelectIcon(props: ISelectIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            fill="none"
            viewBox="0 0 14 8"
        >
            <path
                stroke="#122434"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6 6-6"
            ></path>
        </svg>
    );
}
