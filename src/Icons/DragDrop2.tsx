import * as React from 'react';

export default function DragDrop2({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-drag-drop-2" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M16 8v-4h-12v12.01h4" stroke-dasharray=".001 4"/>
            <rect x="8" y="8" width="12" height="12" rx="2"/>
        </svg>)
}
