import * as React from 'react';

export default function DeviceSpeaker({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-speaker" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="5" y="3" width="14" height="18" rx="2"/>
            <circle cx="12" cy="14" r="3"/>
            <line x1="12" y1="7" x2="12" y2="7.01"/>
        </svg>)
}
