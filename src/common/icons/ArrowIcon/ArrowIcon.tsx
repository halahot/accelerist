import * as React from 'react';

export interface IArrowIconProps {
}

export function ArrowIcon(props: IArrowIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            fill="none"
            viewBox="0 0 11 18"
        >
            <path
                fill="#000"
                fillRule="evenodd"
                d="M.377.377a1.286 1.286 0 011.818 0L9.909 8.09a1.286 1.286 0 010 1.818l-7.714 7.714a1.286 1.286 0 11-1.818-1.818L7.182 9 .377 2.195a1.286 1.286 0 010-1.818z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
