import * as React from 'react';

export default function Headphones({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-headphones" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="13" rx="2" width="5" height="7"/>
            <rect x="15" y="13" rx="2" width="5" height="7"/>
            <path d="M4 15v-3a8 8 0 0 1 16 0v3"/>
        </svg>)
}
