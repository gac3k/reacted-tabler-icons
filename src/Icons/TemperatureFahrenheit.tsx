import * as React from 'react';

export default function TemperatureFahrenheit({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-temperature-fahrenheit"
             width={width} height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor"
             fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="6" cy="8" r="2"/>
            <line x1="13" y1="12" x2="18" y2="12"/>
            <path d="M20 6h-6a1 1 0 0 0 -1 1v11"/>
        </svg>)
}
