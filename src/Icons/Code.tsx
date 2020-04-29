import * as React from 'react';

export default function Code({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="7 8 3 12 7 16"/>
            <polyline points="17 8 21 12 17 16"/>
            <line x1="14" y1="4" x2="10" y2="20"/>
        </svg>)
}
