import * as React from 'react';
import styled from 'styled-components';

export interface IFilterProps {
    text: string;
}


export default function Filter({ text }: IFilterProps) {
    return (
        <Container>
            {text}
        </Container>
    );
}


const Container = styled.div`
    color: #122434;
    border: 1px solid #CAF0FF;
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 10px;
    margin-right: 8px;
    margin-top: 8px;
`