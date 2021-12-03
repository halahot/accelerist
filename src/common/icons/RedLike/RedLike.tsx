import * as React from 'react';

export interface IRedLikeProps {
}

export function RedLike(props: IRedLikeProps) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="16"
        fill="none"
        viewBox="0 0 18 16"
      >
        <path
          fill="#F05658"
          d="M16.612 1.415A4.73 4.73 0 0015.075.368a4.659 4.659 0 00-3.626 0 4.732 4.732 0 00-1.536 1.047L9 2.345l-.913-.93A4.693 4.693 0 004.737 0a4.693 4.693 0 00-3.35 1.415A4.875 4.875 0 000 4.828c0 1.28.5 2.509 1.388 3.414l.912.93L9 16l6.7-6.828.912-.93c.44-.448.79-.98 1.027-1.566a4.908 4.908 0 000-3.695 4.834 4.834 0 00-1.027-1.566z"
        ></path>
      </svg>
    );
}
