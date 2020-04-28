import * as React from 'react';

export default function ArrowsVertical({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-vertical" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="8 7 12 3 16 7"/>
            <polyline points="8 17 12 21 16 17"/>
            <line x1="12" y1="3" x2="12" y2="21"/>
        </svg>)
}
