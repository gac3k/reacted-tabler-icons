import * as React from 'react';

export default function ArrowRight({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
            <line x1="13" y1="18" x2="19" y2="12"/>
            <line x1="13" y1="6" x2="19" y2="12"/>
        </svg>)
}
