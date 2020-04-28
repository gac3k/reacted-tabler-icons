import * as React from 'react';

export default function ChartBar({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-bar" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="3" y="12" width="6" height="8" rx="1"/>
            <rect x="9" y="8" width="6" height="12" rx="1"/>
            <rect x="15" y="4" width="6" height="16" rx="1"/>
            <line x1="4" y1="20" x2="18" y2="20"/>
        </svg>)
}
