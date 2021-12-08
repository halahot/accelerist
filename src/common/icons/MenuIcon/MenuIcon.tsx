import * as React from 'react';

export interface IMenuIconProps {
}

export function MenuIcon(props: IMenuIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <rect width="18" height="2" x="3" y="4" fill="#122434" rx="1"></rect>
            <rect width="18" height="2" x="3" y="11" fill="#122434" rx="1"></rect>
            <rect width="18" height="2" x="3" y="18" fill="#122434" rx="1"></rect>
        </svg>
    );
}
