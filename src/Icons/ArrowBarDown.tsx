import * as React from 'react';

export default function ArrowBarDown({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-down" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="20" x2="12" y2="10"/>
            <line x1="12" y1="20" x2="16" y2="16"/>
            <line x1="12" y1="20" x2="8" y2="16"/>
            <line x1="4" y1="4" x2="20" y2="4"/>
        </svg>)
}
