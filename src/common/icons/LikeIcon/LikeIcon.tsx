import * as React from 'react';

export interface ILikeIconProps {
}

export function LikeIcon(props: ILikeIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            fill="none"
            viewBox="0 0 20 18"
        >
            <path
                stroke="#F05658"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16.851 3.073a4.259 4.259 0 00-1.383-.942 4.194 4.194 0 00-3.263 0 4.259 4.259 0 00-1.384.942L10 3.91l-.822-.837A4.223 4.223 0 006.164 1.8c-1.131 0-2.216.458-3.015 1.273A4.388 4.388 0 001.9 6.145c0 1.153.45 2.258 1.249 3.073l.821.837L10 16.2l6.03-6.145.821-.837a4.35 4.35 0 00.925-1.41 4.417 4.417 0 000-3.325 4.35 4.35 0 00-.925-1.41z"
            ></path>
        </svg>
    );
}
