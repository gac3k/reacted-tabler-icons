import * as React from 'react';

export default function ChartArea({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-area" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="19" x2="20" y2="19"/>
            <polyline points="4 15 8 9 12 11 16 6 20 10 20 15 4 15"/>
        </svg>)
}
