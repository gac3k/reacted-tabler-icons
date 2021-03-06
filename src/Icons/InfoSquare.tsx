import * as React from 'react';

export default function InfoSquare({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-square" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <polyline points="11 12 12 12 12 16 13 16"/>
        </svg>)
}
