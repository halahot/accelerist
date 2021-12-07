import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProspectingSession } from '../../../../common/components/ProspectingSession';
import { getToken } from '../../../../state/ducks/auth';
import { getList, getLists } from '../../../../state/ducks/savedList';
import { EmptyProspectingSessions } from '../EmptyProspectingSessions';
import { SeeMore } from '../SeeMore';


export interface IProspectingSessionsProps {
}

export default function ProspectingSessions(props: IProspectingSessionsProps) {
    const prospectingSessions = useSelector(getLists);
    const token = useSelector(getToken);
    const dispatch = useDispatch();

    const items = useMemo(() => prospectingSessions.slice(0, 2), [prospectingSessions])

    useEffect(() => {
        const params = {
            page: 1,
            limit: 12
        }
        dispatch(getList({ token, params }))
    }, [])

    const elements = items.map((item) =>
        <ProspectingSession key={item.id} item={item}/>
    )
    return (
        <Container>
            <Row style={{ justifyContent: 'space-between', height: '60px' }}>
                <Title>Prospecting Sessions</Title>
                <Link to="/prospects"><SeeMore /></Link>
            </Row>
            {prospectingSessions.length > 0 ?
                <Row style={{ gap: '24px' }}>
                    {elements}
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
