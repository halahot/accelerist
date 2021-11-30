import * as React from 'react';
import styled from 'styled-components';
import { ProspectingSession } from '../ProspectingSession';
import { SeeMore } from '../SeeMore';


export interface IProspectingSessionsProps {
}

export default function ProspectingSessions(props: IProspectingSessionsProps) {
    return (
        <Container>
            <Row style={{ justifyContent: 'space-between' }}>
                <Title>Prospecting Sessions</Title>
                <SeeMore />
            </Row>
            <Row>
                <ProspectingSession />
                <ProspectingSession />
            </Row>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 60px;
`
const Title = styled.div`
    font-weight: 500;
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 16px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`
