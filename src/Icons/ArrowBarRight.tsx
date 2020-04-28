import * as React from 'react';

export default function ArrowBarRight({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-right" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="20" y1="12" x2="10" y2="12"/>
            <line x1="20" y1="12" x2="16" y2="16"/>
            <line x1="20" y1="12" x2="16" y2="8"/>
            <line x1="4" y1="4" x2="4" y2="20"/>
        </svg>)
}
