import * as React from 'react';

export default function LayoutAlignRight({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-align-right"
             width={width} height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor"
             fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="20" y1="4" x2="20" y2="20"/>
            <rect x="4" y="9" width="12" height="6" rx="2"/>
        </svg>)
}
