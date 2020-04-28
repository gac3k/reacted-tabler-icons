import * as React from 'react';

export default function ArrowsSort({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-sort" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M3 9l4-4l4 4m-4 -4v14"/>
            <path d="M21 15l-4 4l-4-4m4 4v-14"/>
        </svg>)
}
