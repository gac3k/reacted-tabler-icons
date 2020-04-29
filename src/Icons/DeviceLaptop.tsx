import * as React from 'react';

export default function DeviceLaptop({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-laptop" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="3" y1="19" x2="21" y2="19"/>
            <rect x="5" y="6" width="14" height="10" rx="1"/>
        </svg>)
}
