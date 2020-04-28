import * as React from 'react';

export default function CurrencyEuro({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-euro" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M17.2 7a6 7 0 1 0 0 10"/>
            <path d="M13 10h-8m0 4h8"/>
        </svg>)
}
