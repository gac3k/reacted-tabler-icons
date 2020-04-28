import * as React from 'react';

export default function ArrowsDiagonal({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-diagonal" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="16 4 20 4 20 8"/>
            <line x1="14" y1="10" x2="20" y2="4"/>
            <polyline points="8 20 4 20 4 16"/>
            <line x1="4" y1="20" x2="10" y2="14"/>
        </svg>)
}
