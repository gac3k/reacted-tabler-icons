import * as React from 'react';

export default function CornerRightUp({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-right-up" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M6 18h6a3 3 0 0 0 3 -3v-10l-5 5m10 0l-5 -5"/>
        </svg>)
}
