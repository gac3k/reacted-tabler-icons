import * as React from 'react';

export default function Crop({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-crop" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M8 5v10a1 1 0 0 0 1 1h10"/>
            <path d="M5 8h10a1 1 0 0 1 1 1v10"/>
        </svg>)
}
