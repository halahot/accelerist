import * as React from 'react';
import styled from 'styled-components';

export interface ILoginTableProps {
}

export function LoginTable(props: ILoginTableProps) {
    return (
        <Container>
            <Row>
                <Ava><span>NN</span></Ava>
                <div className="text">
                    <span style={{ fontWeight: 'bold' }}>No name</span>
                    <span style={{ color: '#bfbfbf' }}>12 Aug 2020</span>
                </div>
            </Row>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 150%;
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