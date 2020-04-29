import * as React from 'react';

export default function BorderRadius({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-border-radius" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M16.01 4h4v16h-16v-4.01" stroke-dasharray=".001 4"/>
            <path d="M4 12v-4a4 4 0 0 1 4 -4h4"/>
        </svg>)
}
