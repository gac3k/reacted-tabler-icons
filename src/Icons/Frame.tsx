import * as React from 'react';

export default function Frame({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-frame" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="7" x2="20" y2="7"/>
            <line x1="4" y1="17" x2="20" y2="17"/>
            <line x1="7" y1="4" x2="7" y2="20"/>
            <line x1="17" y1="4" x2="17" y2="20"/>
        </svg>)
}
