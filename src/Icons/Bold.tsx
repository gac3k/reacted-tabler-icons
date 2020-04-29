import * as React from 'react';

export default function Bold({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bold" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z"/>
            <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"/>
        </svg>)
}
