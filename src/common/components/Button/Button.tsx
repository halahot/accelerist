import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
    color?: string;
    label: string;
    action?: () => void;
    disabled?: boolean;
}

export const Button = ({ color = "#2BAEE0", disabled = true, label, action }: Props) => {
    return (
        <Btn type="submit" color={color} disabled={disabled} onClick={action}>
            {label}
        </Btn>
    )
}

interface BtnProps {
    readonly color: string;
    readonly disabled: boolean;
}

const Btn = styled.button<BtnProps>`
    background-color: ${props => props.color};
    ${props => {
        if(props.disabled) {
            return css`
                background: rgb(206, 237, 249);
                color: rgba(43, 174, 224, 0.3);
                cursor: no-drop;
            `
        }
    }}

`