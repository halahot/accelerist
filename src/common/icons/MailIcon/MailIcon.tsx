import * as React from 'react';

export interface IMailIconProps {
}

export function MailIcon(props: IMailIconProps) {
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
                d="M4.727 5.818a.914.914 0 00-.909.91v10.908c0 .498.412.91.91.91h14.545c.498 0 .909-.412.909-.91V6.727a.914.914 0 00-.91-.909H4.728zM2 6.728A2.733 2.733 0 014.727 4h14.546A2.733 2.733 0 0122 6.727v10.91a2.733 2.733 0 01-2.727 2.726H4.727A2.733 2.733 0 012 17.636V6.727z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#2BAEE0"
                fillRule="evenodd"
                d="M2.164 6.206a.91.91 0 011.266-.224L12 11.981l8.57-5.999a.909.909 0 111.042 1.49l-9.09 6.363a.91.91 0 01-1.043 0L2.388 7.472a.91.91 0 01-.224-1.266z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
