import * as React from 'react';

export interface IFolderPlusIconProps {
}

export function FolderPlusIcon(props: IFolderPlusIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="112"
            height="112"
            fill="none"
            viewBox="0 0 112 112"
        >
            <path
                fill="#E8E8E8"
                d="M8.767 13.434a14 14 0 019.9-4.1H42c1.56 0 3.017.78 3.883 2.077l7.948 11.922h39.502a14.002 14.002 0 0114 14v51.334a14.002 14.002 0 01-14 14H18.667a13.999 13.999 0 01-14-14V23.333a14 14 0 014.1-9.9z"
            ></path>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M56 46.666a4.667 4.667 0 014.667 4.667v28a4.667 4.667 0 11-9.334 0v-28A4.667 4.667 0 0156 46.667z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M37.334 65.333A4.667 4.667 0 0142 60.667h28A4.667 4.667 0 0170 70H42a4.667 4.667 0 01-4.666-4.667z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
