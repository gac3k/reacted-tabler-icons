import * as React from 'react';

export default function Brightness({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brightness" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9"/>
            <line x1="12" y1="3" x2="12" y2="21"/>
            <path d="M12 9l4.65 -4.65"/>
            <path d="M12 14.3l7.37 -7.37"/>
            <path d="M12 19.6l8.85 -8.85"/>
        </svg>)
}
