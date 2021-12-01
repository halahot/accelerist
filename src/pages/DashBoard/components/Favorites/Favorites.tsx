import * as React from 'react';
import styled from 'styled-components';
import { FavoritesIcon } from '../FavoritesIcon';
import { SeeMore } from '../SeeMore';

export interface IFavoritesProps {
}

export default function Favorites(props: IFavoritesProps) {
  return (
    <Container>
      <Row style={{ justifyContent: 'space-between', height: '60px' }}>
        <Title>Prospecting Sessions</Title>
        <SeeMore />
      </Row>
      <Column>
        <FavoritesIcon />
        <span className="bold">No favorite company</span>
        <span className="gotosearch">Go to the search page and add to favorites</span>
        <SearchBtn>Search</SearchBtn>
      </Column>
    </Container>
  );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;

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

const Title = styled.h3` 
   font-weight: 500;
   font-size: 24px;
   line-height: 148%;   
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

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 536px;
    height: 498px;
`