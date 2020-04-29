import * as React from 'react';

export default function UserPlus({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="8.5" cy="7" r="4"/>
            <path d="M2 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2"/>
            <line x1="16" y1="11" x2="22" y2="11"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
        </svg>)
}
