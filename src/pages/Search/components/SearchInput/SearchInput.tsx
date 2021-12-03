import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { IconWrapper } from '../../../../common/components/IconWrapper/IconWrapper';
import { SearchIcon } from '../../../../common/icons';
import { CloseIcon } from '../../../../common/icons/CloseIcon';
import { FilterIcon } from '../../../../common/icons/FilterIcon';

export interface ISearchInputProps {
    showFilter: () => void;
}

export function SearchInput({ showFilter }: ISearchInputProps) {
    const [value, setValue] = useState('')
    return (
        <Container>
            <Input placeholder="Search" value={value} onChange={(e: any) => setValue(e.target.value)} />
            <Close onClick={() => setValue('')}>
                <IconWrapper><CloseIcon /></IconWrapper>
            </Close>
            <Search>
                <IconWrapper><SearchIcon /></IconWrapper>
            </Search>
            <Button onClick={showFilter}>
                <Filter>
                    <IconWrapper><FilterIcon /></IconWrapper>
                </Filter>
            </Button>
        </Container>
    );
}

const Container = styled.div`
    height: 36px;
    width: 100%;
    max-width: 715px;
    position: relative;
`

const Input = styled.input`
    width: 100%;
    overflow: visible;
    background: rgb(241, 244, 245);
    border-radius: 6px;
    border-color: transparent;
    font-size: 12px;
    line-height: 150%;
    color: #737373;
    padding: 8px 42px 8px 20px;
`
const Filter = styled.div`
    position: absolute;
    top: 10px;
    right: 50px;
`
const Button = styled.div`
    padding: 0px;
    border: 0px;
    background: 0px center;
    cursor: pointer;
`

const Search = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
`
const Close = styled.div`

    position: absolute;
    top: 8px;
    right: 88px;
    cursor: pointer;
`
