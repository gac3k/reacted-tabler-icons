import * as React from 'react';

export default function SortDescending({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-descending" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="6" x2="13" y2="6"/>
            <line x1="4" y1="12" x2="11" y2="12"/>
            <line x1="4" y1="18" x2="11" y2="18"/>
            <polyline points="15 15 18 18 21 15"/>
            <line x1="18" y1="6" x2="18" y2="18"/>
        </svg>)
}
