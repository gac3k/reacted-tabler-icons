import * as React from 'react';

export default function Scissors({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scissors" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="6" cy="7" r="3"/>
            <circle cx="6" cy="17" r="3"/>
            <line x1="8.6" y1="8.6" x2="19" y2="19"/>
            <line x1="8.6" y1="15.4" x2="19" y2="5"/>
        </svg>)
}
