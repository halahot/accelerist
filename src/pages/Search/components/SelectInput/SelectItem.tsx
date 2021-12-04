import * as React from 'react';
import styled from 'styled-components';
import { CheckBox } from '../../../../common/components';

export interface ISelectItemProps {
    val: string;
    addVal: (v: string, id: number) => void;
    removeVal: (id: number) => void;
    id: number;
}

export function SelectItem ({id, val, addVal, removeVal}: ISelectItemProps) {

    const onChange = (checked: boolean) => {
        if (checked) {
            addVal(val, id)
        } else {
            removeVal(id)
        }
    }
  
    return (
    <Container>
        <span>{val}</span>
        <CheckBox onChange={onChange}/>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
    justify-content: space-between;
    padding: 0 18px;
`
