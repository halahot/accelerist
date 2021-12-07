import * as React from 'react';
import styled from 'styled-components';
import { FilterData } from '../../../types';

export interface ITagsProps {
    filter?: FilterData;
}

export function Tags({ filter }: ITagsProps) {

    const elements = filter && Object.values(filter).map((value, index) => {
        return <li key={index}>{value}</li>
    })

    return (
        <Container>
            <p>Filters</p>
            <ul>{elements}</ul>
        </Container>
    );
}

const Container = styled.section`
    margin-bottom: 24px;

    p {
        font-size: 12px;
        line-height: 150%;
        color: #737373;
        margin-bottom: 8px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0px 14px;
        list-style: none;
    }

    li {
        border: 1px solid #CAF0FF;
        box-sizing: border-box;
        border-radius: 6px;
        background: rgb(255, 255, 255);
        font-size: 12px;
        line-height: 150%;
        color: #122434;
        padding: 6px 10px;
    }

    li:not(:last-child) {
        margin-right: 8px;
    }
`
