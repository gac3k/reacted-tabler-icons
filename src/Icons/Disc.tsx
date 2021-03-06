import * as React from 'react';

export default function Disc({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-disc" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9"/>
            <circle cx="12" cy="12" r="1"/>
            <path d="M7 12a5 5 0 0 1 5 -5"/>
            <path d="M12 17a5 5 0 0 0 5 -5"/>
        </svg>)
}
