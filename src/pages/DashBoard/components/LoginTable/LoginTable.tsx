import moment from 'moment';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLastLogins } from '../../../../state/ducks/team';

export interface ILoginTableProps {
}

export function LoginTable(props: ILoginTableProps) {
    const lastLogins = useSelector(getLastLogins);

    const elements = lastLogins.map((login) =>
        <Row>
            <Ava><span>NN</span></Ava>
            <div className="text">
                <span style={{ fontWeight: 'bold' }}>{login.user.firstName ? login.user.firstName : 'No name'}</span>
                <span style={{ color: '#bfbfbf' }}>{(moment(login.loggedInAt)).format('DD MMM YYYY')}</span>
            </div>
        </Row>
    )

    return (
        <Container>
            {elements}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 150%;
    overflow: auto;
`
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & div.text {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
        padding: 15px 0;
        border-bottom: 1px solid #eeeeee;
    }
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
`