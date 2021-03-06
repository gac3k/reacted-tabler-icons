import * as React from 'react';

export default function BuildingBridge({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-bridge" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="6" y1="5" x2="6" y2="19"/>
            <line x1="18" y1="5" x2="18" y2="19"/>
            <line x1="2" y1="15" x2="22" y2="15"/>
            <path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2"/>
            <line x1="12" y1="10" x2="12" y2="15"/>
        </svg>)
}
