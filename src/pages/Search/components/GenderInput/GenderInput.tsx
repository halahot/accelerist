import * as React from 'react';
import styled from 'styled-components';

export interface IGenderInputProps {
}

export function GenderInput (props: IGenderInputProps) {
  return (
    <Container>
        <Item><Button>Male</Button></Item>
        <Item><Button>Female</Button></Item>
        <Item><Button>Both</Button></Item>
    </Container>
  );
}

const Container = styled.ul`
    background: rgb(248, 248, 248);
    border-radius: 6px;
    width: 100%;
    display: flex;
    list-style: none;

    & button::focus {
        outline: none;
        background-color: #d4f3ff;
    }
`
const Item = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Button = styled.button`
    height: 36px;
    width: 100%;
    border-radius: 6px;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    color: #737373;
`