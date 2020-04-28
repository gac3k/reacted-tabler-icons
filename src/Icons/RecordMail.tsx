import * as React from 'react';

export default function RecordMail({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-record-mail" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="7" cy="12" r="3"/>
            <circle cx="17" cy="12" r="3"/>
            <line x1="7" y1="15" x2="17" y2="15"/>
        </svg>)
}
