import * as React from 'react';

export default function Disabled({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-disabled" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="11" cy="5" r="2"/>
            <polyline points="11 7 11 15 15 15 19 20"/>
            <line x1="11" y1="11" x2="16" y2="11"/>
            <path d="M7 11.5a4.97 4.97 0 1 0 6 7.5"/>
        </svg>)
}
