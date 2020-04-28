import * as React from 'react';

export default function DeviceMobile({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="7" y="4" width="10" height="16" rx="1"/>
            <line x1="11" y1="5" x2="13" y2="5"/>
            <line x1="12" y1="17" x2="12" y2="17.01"/>
        </svg>)
}
