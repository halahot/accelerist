import * as React from 'react';
import {join} from 'lodash';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FilterData } from '../../../types';

export interface ITagsProps {
    filter?: FilterData;
}

export function Tags({ filter }: ITagsProps) {

    const elements = filter && Object.keys(filter).map((key) => {
        
        //@ts-ignore
        const item = filter[key]

        if (key === 'deleteIds' || item === '') return null;
        
        if (item instanceof Array) {
            return <li key={key}>{join(item, ', ')}</li>;
        }
        
        return <li key={key}>{item}</li>
    })

    return (
        <Container>
            <p>Filters</p>
            <div className="list">{elements}</div>
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

    div.list {
        display: flex;
        align-items: center;
        overflow-x: scroll;
    }

    div.list ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0px 14px;
        list-style: none;
    }

    div.list li {
        border: 1px solid #CAF0FF;
        box-sizing: border-box;
        border-radius: 6px;
        background: rgb(255, 255, 255);
        font-size: 12px;
        line-height: 150%;
        color: #122434;
        padding: 6px 10px;
        max-height: 30px;
        min-width: 50px;
        list-style: none;
        overflow: hidden;
    }

    li:not(:last-child) {
        margin-right: 8px;
    }
`
