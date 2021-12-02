import * as React from 'react';

export interface IExcelIconProps {
}

export function ExcelIcon(props: IExcelIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill="#2BAEE0"
                fillRule="evenodd"
                d="M21 10a1 1 0 01-1-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v4a1 1 0 01-2 0V5a3 3 0 013-3h14a3 3 0 013 3v4a1 1 0 01-1 1zM12.707 21.707a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L12 19.586l4.293-4.293a1 1 0 011.414 1.414l-5 5z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#2BAEE0"
                fillRule="evenodd"
                d="M12 22a1 1 0 01-1-1V9a1 1 0 112 0v12a1 1 0 01-1 1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
