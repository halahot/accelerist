import * as React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/logo.png';

export interface IAvaProps {
}

export function Ava(props: IAvaProps) {
    return (
        <Container>
            <img alt="logo" src={logo} />
            <span>Noname</span>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`