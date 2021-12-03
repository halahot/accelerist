import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CheckBoxIcon } from '../../icons/CheckBoxIcon';

export interface ICheckBoxProps {
    onChange: (checked: boolean) => void;
}

export function CheckBox(props: ICheckBoxProps) {
    const [isChecked, setIsChecked] = useState(false);

    const onCheck = () => {
        setIsChecked(!isChecked)
        props.onChange(!isChecked);
    }
    return (
        <CheckWrapper isCheck={isChecked} onClick={onCheck}>
            {isChecked && <CheckBoxIcon />}
        </CheckWrapper>
    );
}

interface CheckWrapperProps {
    readonly isCheck: boolean;
}

const CheckWrapper = styled.div<CheckWrapperProps>`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid #E8E8E8;
    background: ${(props => props.isCheck ? '#CAF0FF' : '#fff')};
    cursor: pointer;
`
