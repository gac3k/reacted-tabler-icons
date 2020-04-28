import * as React from 'react';

export default function Mug({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mug" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M5 6h10a1 1 0 0 1 1 1v8a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4v-8a1 1 0 0 1 1 -1"/>
            <path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2"/>
        </svg>)
}
