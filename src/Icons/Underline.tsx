import * as React from 'react';

export default function Underline({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-underline" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="7" y1="19" x2="17" y2="19"/>
            <path d="M8 5v6a4 4 0 0 0 8 0v-6"/>
        </svg>)
}
