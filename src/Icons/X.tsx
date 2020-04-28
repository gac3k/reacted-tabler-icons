import * as React from 'react';

export default function X({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={width} height={height}
             viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none" strokeLinecap="round"
             stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>)
}
