import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NoFavorites, SearchResult } from '../../common/components';
import withHeader from '../../common/hoc/withHeader'
import { getToken } from '../../state/ducks/auth';
import { fetchFavorites, getFavorites } from '../../state/ducks/company';
import { FilterData } from '../../types';
import { CompanyModel } from '../../types/models';

interface Props {

}

const FavoritesScreen = (props: Props) => {
    const favorites: CompanyModel[] = useSelector(getFavorites);
    const dispatch = useDispatch();

    const token = useSelector(getToken);

    useEffect(() => {
        const data = {
            token,
            params: { limit: 12, page: 1 }
        }

        dispatch(fetchFavorites(data))
    }, [])


    return (
        <Container>
            <Title><h1>Favorites</h1></Title>
            <Content>
                <SearchResult companies={favorites} isFavorite={true} />
            </Content>
        </Container>
    )
}

export default withHeader(FavoritesScreen);

const Container = styled.div`
`

const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 60px;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    height: 96px;

    & h1 {
        font-weight: 500;
        font-size: 32px;
        line-height: 150%;
        color: #122434;
        margin-right: 80px;
    }
`

const Content = styled.div`
    background: rgb(249, 249, 249);
    min-height: calc(100% - 176px);
`