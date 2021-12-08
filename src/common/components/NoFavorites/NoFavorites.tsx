import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBtn } from '..';
import { FavoritesIcon } from '../../../pages/DashBoard/components/FavoritesIcon';

export interface INoFavoritesProps {
}

export function NoFavorites(props: INoFavoritesProps) {

    return (
        <Container>
            <FavoritesIcon />
            <span className="bold">No favorite company</span>
            <span className="gotosearch">Go to the search page and add to favorites</span>
            <SearchBtn />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 536px;
    height: 498px;


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
        margin-bottom: 30px;
    }
`
