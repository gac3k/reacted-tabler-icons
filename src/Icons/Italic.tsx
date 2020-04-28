import * as React from 'react';

export default function Italic({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-italic" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="11" y1="5" x2="17" y2="5"/>
            <line x1="7" y1="19" x2="13" y2="19"/>
            <line x1="14" y1="5" x2="10" y2="19"/>
        </svg>)
}
