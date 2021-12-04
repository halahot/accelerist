import * as React from 'react';
import styled from 'styled-components';
import { ItemType } from './GenderInput';

export interface IItemProps {
    item: ItemType;
    id: number;
    setIsActive: (id: number) => void;
}

export function Item ({item, id, setIsActive}: IItemProps) {
  return (
    <Container>
      <Button type="button" onClick={() => setIsActive(id)} isActive={item.isActive}>{item.text}</Button>
    </Container>
  );
}

const Container = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;

`

interface ButtonProps {
    isActive: boolean;
}

const Button = styled.button<ButtonProps>`
    height: 36px;
    width: 100%;
    border-radius: 6px;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    color: #737373;
    background-color: ${props => props.isActive ? '#d4f3ff' : 'rgb(248, 248, 248)'};
`