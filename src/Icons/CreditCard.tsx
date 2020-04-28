import * as React from 'react';

export default function CreditCard({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="3" y="5" width="18" height="14" rx="3"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
            <line x1="7" y1="15" x2="7.01" y2="15"/>
            <line x1="11" y1="15" x2="13" y2="15"/>
        </svg>)
}