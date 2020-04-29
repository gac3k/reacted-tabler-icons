import * as React from 'react';

export default function MoodConfuzed({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-confuzed" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9"/>
            <line x1="9" y1="10" x2="9.01" y2="10"/>
            <line x1="15" y1="10" x2="15.01" y2="10"/>
            <path d="M9.5 16a10 10 0 0 1 6 -1.5"/>
        </svg>)
}
