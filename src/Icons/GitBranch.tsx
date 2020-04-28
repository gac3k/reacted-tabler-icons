import * as React from 'react';

export default function GitBranch({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-git-branch" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="7" cy="18" r="2"/>
            <circle cx="7" cy="6" r="2"/>
            <circle cx="17" cy="6" r="2"/>
            <line x1="7" y1="8" x2="7" y2="16"/>
            <path d="M9 18h6a2 2 0 0 0 2 -2v-5"/>
            <polyline points="14 14 17 11 20 14"/>
        </svg>)
}
