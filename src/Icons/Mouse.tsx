import * as React from 'react';

export default function Mouse({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mouse" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="7" y="4" width="10" height="16" rx="4"/>
            <line x1="12" y1="8" x2="12" y2="11"/>
        </svg>)
}
