import React from 'react';

interface Props {
    className?: string;
    animationClass?: string;
}

export const RightArrow: React.FC<Props> = (props) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_4_1809)">
            <path
                d="M7.15834 13.825L10.975 10L7.15834 6.175L8.33334 5L13.3333 10L8.33334 15L7.15834 13.825Z"
                fill="black"
            />
        </g>
        <defs>
            <clipPath id="clip0_4_1809">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
