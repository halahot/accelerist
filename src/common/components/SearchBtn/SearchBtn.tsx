import * as React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export interface ISearchBtnProps {
}

export function SearchBtn(props: ISearchBtnProps) {
    const navigate = useNavigate();

    const gotosearch = () => {
        navigate('/search');
    }


    return (
        <Container onClick={gotosearch}>Search</Container>
    );
}

const Container = styled.div`
    border: 1px solid #2BAEE0;
    width: 244px;
    height: 36px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`
