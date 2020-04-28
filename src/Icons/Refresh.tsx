import * as React from 'react';

export default function Refresh({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-refresh" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"/>
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"/>
        </svg>)
}
