import * as React from 'react';

export default function ArrowNarrowDown({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-down" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="16" y1="15" x2="12" y2="19"/>
            <line x1="8" y1="15" x2="12" y2="19"/>
        </svg>)
}
