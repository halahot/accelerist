import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export interface IHeaderLinkProps {
  path: string;
  title: string;
}

export function HeaderLink({ path, title }: IHeaderLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <div>
      <CustomLink to={path}>{title}</CustomLink>
      {isActive && <Line />}
    </div>
  );
}

const CustomLink = styled(Link)`
    color: #122434;    
`

const Line = styled.div`
    height: 1px;
    background-color: #122434;
`




