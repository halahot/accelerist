import * as React from 'react';
import styled from 'styled-components';
import { Filter } from '../Filter';
import ava from '../../../../assets/ava.png';

export interface IProspectingSessionProps {
}

export default function ProspectingSession(props: IProspectingSessionProps) {
    return (
        <Container>
            <h4>Race for the Cure</h4>
            <Line />
            <span>Filters</span>
            <Row>
                <Filter text="Travel Industry" />
                <Filter text="$500-$1B" />
                <Filter text="National" />
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
                <Card>
                    <span className="number">№ of Prospects Available</span>
                    <span className="digit">230</span>
                </Card>
                <Card>
                    <span className="number">№ of Contacts Pursued</span>
                    <span className="digit">72</span>
                </Card>
            </Row>
            <Row style={{ justifyContent: "space-between" }}>
                <Row>
                    <img src={ava} />
                    <Column>
                        <span className="author">Jenny Wilson</span>
                        <span className="number">owner</span>
                    </Column>
                </Row>
                <Column>
                    <span className="number">Last activity</span>
                    <span>1 Jul 2020</span>
                </Column>
            </Row>
        </Container>
    );
}

const Container = styled.div`
    width: 536px;
    height: 312px;
    background-color: #fff;
    padding: 24px;
    margin-right: 24px;

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
    margin: 24px 0;
`
