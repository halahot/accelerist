import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconWrapper } from '../../../../common/components';
import { NoImageIcon } from '../../../../common/icons';
import { CompanyModel } from '../../../../types/models';

export default interface IFavoritesCardProps {
    item: CompanyModel;
}

export function FavoritesCard ({item}: IFavoritesCardProps) {
  
  const {id, name} = item;  
  return (
    <Container>
      <Row>
          <Ava><NoImageIcon/></Ava>
          <div>
              <StyledLink to={`/company/${id}`}>{name}</StyledLink>
              <p className="gray">Priority ranking 12</p>
          </div>
      </Row>
      <p className="gray">CSR Focus</p>
      <p>No information</p>
    </Container>
  );
}

const Container = styled.div`
    width: 256px;
    min-height: 156px;
    background: rgb(255, 255, 255);
    border-radius: 6px;
    margin: 12px;
    padding: 24px;
    font-size: 12px;
    line-height: 150%;

    p.gray {
        color: #737373;    
    }
`

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const StyledLink = styled(Link)`
    display: inline-block;
    width: 140px;
    line-height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    color: #122434;
`

const Ava = styled.div`
    background: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 6px;
    margin-right: 12px;
    min-width: 48px;
`

