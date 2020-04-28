import * as React from 'react';

export default function Bandage({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bandage" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="14" y1="12" x2="14" y2="12.01"/>
            <line x1="10" y1="12" x2="10" y2="12.01"/>
            <line x1="12" y1="10" x2="12" y2="10.01"/>
            <line x1="12" y1="14" x2="12" y2="14.01"/>
            <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7"/>
        </svg>)
}