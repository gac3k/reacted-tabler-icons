import * as React from 'react';
import styled from 'styled-components'
import * as Icons from './Icons'

type PropsT = {
    name: keyof typeof Icons | string,
    size?: 'sm' | 'md' | 'lg',
    strokeWidth?: number,
    [propName: string]: any
}

const IconContainer = styled.div<PropsT>`
    margin: 0;
    padding: 0;
    
    font-size: ${({ size }) => size === 'lg' ? '64px' : '48px'};
`

const getSize = (size: string) => {
    switch(size) {
        case 'lg':
            return [64, 64]
        case 'md':
            return [48, 48]
        case 'sm':
        default:
            return [32, 32]
    }
}

export function Icon(props: PropsT) {
    const { name, size = 'sm', strokeWidth = 2, ...defaultProps } = props

    const IconElement = Icons[name] as any
    const [ width, height ] = getSize(size);

    return <IconContainer {...defaultProps}>
       <IconElement width={width} height={height} strokeWidth={strokeWidth} />
    </IconContainer>
}
