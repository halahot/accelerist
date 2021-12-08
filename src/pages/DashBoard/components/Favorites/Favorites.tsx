import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NoFavorites } from '../../../../common/components';
import { getToken } from '../../../../state/ducks/auth';
import { fetchFavorites, getFavorites } from '../../../../state/ducks/company';
import { CompanyModel } from '../../../../types/models';
import { FavoritesList } from '../FavoritesList';
import { SeeMore } from '../SeeMore';

export interface IFavoritesProps {
}

export default function Favorites(props: IFavoritesProps) {
  const favorites: CompanyModel[] = useSelector(getFavorites);
    const dispatch = useDispatch();
    const token = useSelector(getToken);

    React.useEffect(() => {
        const data = {
            token,
            params: { limit: 12, page: 1 }
        }

        dispatch(fetchFavorites(data))
    }, [])
  return (
    <Container>
      <Row style={{ justifyContent: 'space-between', height: '60px' }}>
        <Title>Favorites</Title>
        <Link to="/favorites"><SeeMore /></Link>
      </Row>
      {favorites.length > 0 ? <FavoritesList favorites={favorites} /> : <NoFavorites />}
    </Container>
  );
}

const Container = styled.section`
    max-width: 536px;
    width: 100%;
`

const Title = styled.h3` 
   font-weight: 500;
   font-size: 24px;
   line-height: 148%;   
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

