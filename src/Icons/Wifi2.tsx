import * as React from 'react';

export default function Wifi2({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wifi-2" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <g transform="rotate(-45 12 18)">
                <line x1="12" y1="18" x2="12.01" y2="18"/>
                <path d="M12 14a4 4 0 0 1 4 4"/>
                <path d="M12 10a8 8 0 0 1 8 8"/>
            </g>
        </svg>)
}
