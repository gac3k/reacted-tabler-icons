import * as React from 'react';

export default function ArrowUp({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="18" y1="11" x2="12" y2="5"/>
            <line x1="6" y1="11" x2="12" y2="5"/>
        </svg>)
}
