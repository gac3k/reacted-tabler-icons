import * as React from 'react';

export default function Layout2({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-2" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="4" width="6" height="5" rx="2"/>
            <rect x="4" y="13" width="6" height="7" rx="2"/>
            <rect x="14" y="4" width="6" height="7" rx="2"/>
            <rect x="14" y="15" width="6" height="5" rx="2"/>
        </svg>)
}
