import * as React from 'react';

export default function Minimize({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minimize" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M15 19v-2a2 2 0 0 1 2 -2h2"/>
            <path d="M15 5v2a2 2 0 0 0 2 2h2"/>
            <path d="M5 15h2a2 2 0 0 1 2 2v2"/>
            <path d="M5 9h2a2 2 0 0 0 2 -2v-2"/>
        </svg>)
}
