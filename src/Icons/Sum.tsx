import * as React from 'react';

export default function Sum({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sum" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M18 16v2a1 1 0 0 1 -1 1h-11l6-7l-6-7h11a1 1 0 0 1 1 1v2"/>
        </svg>)
}
