import * as React from 'react';
import styled from 'styled-components';

export interface ISeeMoreProps {
}

export default function SeeMore (props: ISeeMoreProps) {
  return (
    <Link>see more</Link>
  );
}

const Link = styled.a`
    text-decoration: none;
    color: #2BAEE0;
    cursor: pointer;
`
