import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface IHeaderLinkProps {
    path: string;
    title: string;
}

export function HeaderLink ({path, title}: IHeaderLinkProps) {
  return (
    <div>
        <CustomLink to={path}>{title}</CustomLink>
        <Line/>
    </div>
  );
}

const CustomLink = styled(Link)`
    color: #122434;    
`

const Line = styled.div`
    width: 61px;
    height: 1px;
    background-color: #122434;
`




