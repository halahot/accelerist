import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { IconWrapper } from '../../../../common/components';
import { CloseIcon } from '../../../../common/icons';

export interface IInputProps {
    placeholder?: string;
    value?: string;
    onChange?: () => void;
}

export function Input({placeholder='Search', value, onChange}: IInputProps) {
    const [val, setValue] = useState(value);

    const reset = () => setValue('')

    return (
        <Container>
            <input type="text" placeholder={placeholder} value={val}/>
            {value && <IconWrapper style={style} onClick={reset}><CloseIcon /></IconWrapper>}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    position: relative;

    & input {
        border: 1px solid #E8E8E8;
        border-radius: 6px;
        padding: 0px 31px 0px 16px;
        height: 46px;
        width: 100%;
        padding: 0 8px;
    }
`

const style = {
    cursor: "pointer",
    position: "absolute",
    top: '8px',
    right: '8px',
    bottom: '0',
    background: "none",
    border: '0',
}