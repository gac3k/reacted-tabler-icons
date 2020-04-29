import * as React from 'react';

export default function DeviceTablet({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tablet" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="5" y="3" width="14" height="18" rx="1"/>
            <circle cx="12" cy="17" r="1"/>
        </svg>)
}
