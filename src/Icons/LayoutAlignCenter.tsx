import * as React from 'react';

export default function LayoutAlignCenter({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-align-center"
             width={width} height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor"
             fill="none" strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="4" x2="12" y2="9"/>
            <line x1="12" y1="15" x2="12" y2="20"/>
            <rect x="6" y="9" width="12" height="6" rx="2"/>
        </svg>)
}
