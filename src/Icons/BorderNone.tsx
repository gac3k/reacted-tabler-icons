import * as React from 'react';

export default function BorderNone({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-border-none" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <g stroke-dasharray=".001 4">
                <line x1="4" y1="4" x2="20" y2="4"/>
                <line x1="20" y1="4" x2="20" y2="20"/>
                <line x1="20" y1="20" x2="4" y2="20"/>
                <line x1="4" y1="20" x2="4" y2="4"/>
                <line x1="4" y1="12" x2="20" y2="12"/>
                <line x1="12" y1="4" x2="12" y2="20"/>
            </g>
        </svg>)
}
