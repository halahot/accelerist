import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import withHeader from '../../common/hoc/withHeader';
import { getLists } from '../../state/ducks/savedList';
import { EmptyProspectingSessions } from '../DashBoard/components/EmptyProspectingSessions';

interface Props {

}

const ProspectNavigatorScreen = (props: Props) => {
    const prospectingSessions = useSelector(getLists);

    return (
        <>
            <Title>
                <h1>Prospects</h1>
            </Title>
            <Content>
                <div className="content">
                    <div className="subtitle">
                        <div className="header">
                            <ul>
                                <li>Sort by</li>
                                <li>Alphabet</li>
                                <li>Prospects Available</li>
                                <li>Last Activity</li>
                            </ul>
                        </div>
                    </div>
                    
                        <Area>
                        {prospectingSessions.length > 0 ? <h2>list</h2> : <EmptyProspectingSessions />}
                        </Area> 
                </div>
            </Content>
        </>
    )
}

export default withHeader(ProspectNavigatorScreen)

const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 60px;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    height: 96px;

    h1 {
        font-weight: 500;
        font-size: 32px;
        line-height: 150%;
        color: #122434;
        margin-right: 80px;
    }
`

const Content = styled.div`
    background: rgb(249, 249, 249);
    min-height: calc(100% - 176px);

    div.content {
        width: 100%;
        margin: 0px auto;
        padding: 32px 60px 20px;
    }

    & div.subtitle { 
        display: flex;
        margin-bottom: 23px;
        max-width: 1096px;
    }

    & div.subtitle ul {
        display: flex;
        list-style: none;
        background-color: transparent;
    }
    
    div.subtitle li:not(:last-child) {
        margin-right: 22px;
    }

    & div.header {
        display: flex;
    }
`
const Area = styled.div`
    height: calc(100vh - 280px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: rgb(255, 255, 255);
    border-radius: 6px;
`