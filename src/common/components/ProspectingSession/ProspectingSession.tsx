import * as React from 'react';
import styled from 'styled-components';
import { Tags } from '..';
import { SavedListModel } from '../../../types/models';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { getList } from '../../../state/ducks/savedList';

export interface IProspectingSessionProps {
    item: SavedListModel;
}

export default function ProspectingSession({ item }: IProspectingSessionProps) {
    const { name, filters, prospectsAvailable, updateAt } = item;
    
    let formattedDate = (moment(updateAt)).format('DD MMM YYYY')
    return (
        <Container>
            <h4>{name ? name : 'No name'}</h4>
            <Line />
            <Tags filter={filters} />
            <Row style={{ justifyContent: "space-between" }}>
                <Card>
                    <span className="number">№ of Prospects Available</span>
                    <span className="digit">{prospectsAvailable}</span>
                </Card>
                <Card>
                    <span className="number">№ of Contacts Pursued</span>
                    <span className="digit">72</span>
                </Card>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
                <Row>
                    <Ava><span>NN</span></Ava>
                    <Column>
                        <span className="author">No name</span>
                        <span className="number">owner</span>
                    </Column>
                </Row>
                <Column>
                    <span className="number">Last activity</span>
                    <span className="number black">{formattedDate}</span>
                </Column>
            </Row>
        </Container>
    );
}

const Container = styled.section`
    width: 536px;
    height: 312px;
    background-color: #fff;
    padding: 24px;
    margin: 12px;
    border-radius: 6px;

`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E8E8E8;
    margin-bottom: 9px;
    margin-top: 16px;
`
const Row = styled.div`
    display: flex;
    /* flex-direction: row; */

    & span.number {
        font-size: 12px;
        line-height: 150%;
        color: #737373;
    }
    
    & span.digit {
        font-size: 24px;
        line-height: 150%;
        color: #122434;
    }
    
    & span.author {
        font-size: 12px;
        font-weight: 500;
        line-height: 150%;
        color: #122434;
    }

    & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 12px;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;

    span.black{
        color: #122434;
    }
`
const Card = styled.div`
    width: 235px;
    height: 71px;
    background-color: #f9f9f9;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
`

const Ava = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    background-color: blue;
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    margin-right: 15px;
`
