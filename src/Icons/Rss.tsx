import * as React from 'react';

export default function Rss({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rss" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="5" cy="19" r="1"/>
            <path d="M4 4a16 16 0 0 1 16 16"/>
            <path d="M4 11a9 9 0 0 1 9 9"/>
        </svg>)
}
