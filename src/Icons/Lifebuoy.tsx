import * as React from 'react';

export default function Lifebuoy({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lifebuoy" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="12" cy="12" r="9"/>
            <line x1="15" y1="15" x2="18.35" y2="18.35"/>
            <line x1="9" y1="15" x2="5.65" y2="18.35"/>
            <line x1="5.65" y1="5.65" x2="9" y2="9"/>
            <line x1="18.35" y1="5.65" x2="15" y2="9"/>
        </svg>)
}
