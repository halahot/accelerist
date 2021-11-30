import * as React from 'react';
import styled from 'styled-components';
import { FavoritesIcon } from '../FavoritesIcon';

export interface IFavoritesProps {
}

export default function Favorites (props: IFavoritesProps) {
  return (
    <Container>
      <FavoritesIcon/>  
      <span>No favorite company</span>
      <span className="gotosearch">Go to the search page and add to favorites</span>
      <SearchBtn>Search</SearchBtn>
    </Container>
  );
}

const Container = styled.div`
    width: 536px;
    height: 498px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    & span.gotosearch {
        font-size: 12px;
        color: #bfbfbf;
    }
`

const SearchBtn = styled.div`
    border: 1px solid #2BAEE0;
    margin-top: 32px;
    width: 244px;
    height: 36px;
`
