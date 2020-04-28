import * as React from 'react';

export default function BuildingStore({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="3" y1="21" x2="21" y2="21"/>
            <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"/>
            <path d="M5 21v-10.15"/>
            <path d="M19 21v-10.15"/>
            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"/>
        </svg>)
}