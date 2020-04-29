import * as React from 'react';

export default function IceCream({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ice-cream" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="20" x2="8" y2="16"/>
            <line x1="5" y1="13" x2="11" y2="19"/>
            <path d="M11 19l7 -7a4 4 0 0 0 -6 -6l-7 7"/>
        </svg>)
}
