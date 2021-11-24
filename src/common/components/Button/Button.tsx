import React from 'react'
import styled from 'styled-components'

interface Props {
    color?: string;
    label: string;
    action?: () => void;
}

export const Button = ({color="#2BAEE0", label, action}: Props) => {
    return (
        <Btn type="submit" color={color} onClick={action}>
            {label}
        </Btn>
    )
}

interface BtnProps {
    readonly color: string;
}

const Btn = styled.button<BtnProps>`
    background-color: ${props => props.color};
`