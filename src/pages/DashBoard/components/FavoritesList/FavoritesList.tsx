import * as React from 'react';
import styled from 'styled-components';
import { CompanyModel } from '../../../../types/models';
import { FavoritesCard } from '../FavoritesCard';

export interface IFavoritesListProps {
    favorites: CompanyModel[];
}

export function FavoritesList({ favorites }: IFavoritesListProps) {

    const elements = favorites?.map((item) => <FavoritesCard item={item} />)
    return (
        <Content>
            {elements}
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: -12px -12px 0px;
`
