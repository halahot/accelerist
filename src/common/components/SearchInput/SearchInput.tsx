import * as React from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../SearchIcon';

export interface ISearchInputProps {
}

export function SearchInput(props: ISearchInputProps) {
    console.log(123);
    return (
        <Container>
            <input placeholder="Search"/>
            <div>
                <SearchIcon />
            </div>
        </Container>
    );
}

const Container = styled.div`
    background-color: #F3FCFF;
    border-radius: 6px;
    width: 365px;
    height: 36px;
    display: flex;
    align-items: center;
    padding-left: 24px;
    padding-right: 10px;
    margin-left: 17px;
    margin-right: 16px;

    & input {
       width: 100%;
       background-color: transparent;
       outline: none;
       height: 100%;
       border: none;
    }

    & div {

    }
`
