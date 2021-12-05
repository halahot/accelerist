import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FavoritesIcon } from '../../../DashBoard/components/FavoritesIcon';

export interface INoFavCompProps {
}

export function NoFavComp(props: INoFavCompProps) {

    const navigate = useNavigate();

    const gotosearch = () => {
        navigate('/search');
    }
    return (
        <Container>
            <FavoritesIcon />
            <span className="bold">No favorite company</span>
            <span className="gotosearch">Go to the search page and add to favorites</span>
            <SearchBtn onClick={gotosearch}>Search</SearchBtn>
        </Container>
    );
}

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgb(255, 255, 255);
        border-radius: 6px;
        width: 100%;
        height: calc(100vh - 284px);


    & span.bold {
        font-size: 16px;
        font-weight: 500;
        color: #122434;
        margin-top: 39px;
    }
    
    & span.gotosearch {
        font-size: 12px;
        color: #bfbfbf;
        margin-top: 8px;
    }
`
const SearchBtn = styled.div`
    border: 1px solid #2BAEE0;
    margin-top: 32px;
    width: 244px;
    height: 36px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`