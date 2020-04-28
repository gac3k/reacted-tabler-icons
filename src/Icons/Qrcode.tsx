import * as React from 'react';

export default function Qrcode({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-qrcode" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="4" width="6" height="6" rx="1"/>
            <line x1="7" y1="17" x2="7" y2="17.01"/>
            <rect x="14" y="4" width="6" height="6" rx="1"/>
            <line x1="7" y1="7" x2="7" y2="7.01"/>
            <rect x="4" y="14" width="6" height="6" rx="1"/>
            <line x1="17" y1="7" x2="17" y2="7.01"/>
            <line x1="14" y1="14" x2="17" y2="14"/>
            <line x1="20" y1="14" x2="20" y2="14.01"/>
            <line x1="14" y1="14" x2="14" y2="17"/>
            <line x1="14" y1="20" x2="17" y2="20"/>
            <line x1="17" y1="17" x2="20" y2="17"/>
            <line x1="20" y1="17" x2="20" y2="20"/>
        </svg>)
}