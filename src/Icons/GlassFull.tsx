import * as React from 'react';

export default function GlassFull({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-glass-full" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="15" x2="12" y2="21"/>
            <path d="M16 4l1 6a5 5 0 0 1 -10 0l1 -6z"/>
            <path d="M7 10a4 4 0 0 1 5 0a4 4 0 0 0 5 0"/>
        </svg>)
}
