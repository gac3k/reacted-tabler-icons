import * as React from 'react';

export default function CornerUpRight({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-up-right" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M6 18v-6a3 3 0 0 1 3 -3h10l-5 -5m0 10l5 -5"/>
        </svg>)
}
