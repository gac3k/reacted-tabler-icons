import * as React from 'react';

export default function RotateClockwise2({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-clockwise-2"
             width={width} height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor"
             fill="none" strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M12 4a8 8 0 0 1 3 15.45m0 -4.45v5h5"/>
            <path d="M11 19.95a8 8 0 0 1 -2 -15.35" stroke-dasharray=".001 4"/>
        </svg>)
}
