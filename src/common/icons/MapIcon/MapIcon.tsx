import * as React from 'react';

export interface IMapIconProps {
}

export function MapIcon(props: IMapIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
        >
            <g
                stroke="#2BAEE0"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                clipPath="url(#clip0_390_7709)"
            >
                <path d="M17.5 8.333c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 0115 0z"></path>
                <path d="M10 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
            </g>
            <defs>
                <clipPath id="clip0_390_7709">
                    <path fill="#fff" d="M0 0H20V20H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}
