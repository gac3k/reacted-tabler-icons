import * as React from 'react';

export default function FileShredder({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-shredder" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="14 3 14 8 19 8"/>
            <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="6" y1="16" x2="6" y2="18"/>
            <line x1="10" y1="16" x2="10" y2="22"/>
            <line x1="14" y1="16" x2="14" y2="18"/>
            <line x1="18" y1="16" x2="18" y2="20"/>
        </svg>)
}
