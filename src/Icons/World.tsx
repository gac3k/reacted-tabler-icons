import * as React from 'react';

export default function World({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <path d="M12 3a12 12 0 0 0 0 18"/>
            <path d="M12 3a12 12 0 0 1 0 18"/>
        </svg>)
}
