import * as React from 'react';
import styled from 'styled-components';
import { ProspectingSession } from '../ProspectingSession';
import { SeeMore } from '../SeeMore';


export interface IProspectingSessionsProps {
}

export default function ProspectingSessions(props: IProspectingSessionsProps) {
    return (
        <Container>
            <Row style={{ justifyContent: 'space-between', height: '60px'}}>
                <Title>Prospecting Sessions</Title>
                <SeeMore />
            </Row>
            <Row style={{gap: '24px'}}>
                <ProspectingSession />
                <ProspectingSession />
            </Row>
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`
const Title = styled.div`
    font-weight: 500;
    font-size: 24px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
