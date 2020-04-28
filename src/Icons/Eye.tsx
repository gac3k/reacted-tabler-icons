import * as React from 'react';

export default function Eye({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="2"/>
            <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2"/>
            <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2"/>
        </svg>)
}
