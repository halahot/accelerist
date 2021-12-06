import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProspectingSession } from '../../../../common/components/ProspectingSession';
import { getLists } from '../../../../state/ducks/savedList';
import { EmptyProspectingSessions } from '../EmptyProspectingSessions';
import { SeeMore } from '../SeeMore';


export interface IProspectingSessionsProps {
}

export default function ProspectingSessions(props: IProspectingSessionsProps) {
    const prospectingSessions = useSelector(getLists);

    return (
        <Container>
            <Row style={{ justifyContent: 'space-between', height: '60px' }}>
                <Title>Prospecting Sessions</Title>
                <Link to="/prospects"><SeeMore /></Link>
            </Row>
            {prospectingSessions.length > 0 ?
                <Row style={{ gap: '24px' }}>

                </Row> :
                <EmptyProspectingSessions />}
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
