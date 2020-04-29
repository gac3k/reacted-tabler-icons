import * as React from 'react';

export default function Accessible({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-accessible" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9"/>
            <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1"/>
            <circle cx="12" cy="7.5" r=".5"/>
        </svg>)
}
