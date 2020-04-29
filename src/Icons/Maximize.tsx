import * as React from 'react';

export default function Maximize({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-maximize" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M4 8v-2a2 2 0 0 1 2 -2h2"/>
            <path d="M4 16v2a2 2 0 0 0 2 2h2"/>
            <path d="M16 4h2a2 2 0 0 1 2 2v2"/>
            <path d="M16 20h2a2 2 0 0 0 2 -2v-2"/>
        </svg>)
}
