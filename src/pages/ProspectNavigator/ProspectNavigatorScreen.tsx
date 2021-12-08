import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ProspectingSession } from '../../common/components';
import withHeader from '../../common/hoc/withHeader';
import { getToken } from '../../state/ducks/auth';
import { getList, getLists } from '../../state/ducks/savedList';
import { EmptyProspectingSessions } from '../DashBoard/components/EmptyProspectingSessions';

interface Props {

}

const ProspectNavigatorScreen = (props: Props) => {
    const prospectingSessions = useSelector(getLists);
    const token = useSelector(getToken);
    const dispatch = useDispatch();

    const elements = prospectingSessions.map((item) =>
        <ProspectingSession key={item.id} item={item} />
    )

    let query = useLocation();
    const sort = useMemo(() => {
        const parts = query.search.split('=');
        return parts[parts.length - 1];
    }, [query])

    useEffect(() => {
        const params = {
            page: 1,
            limit: 12,
            sort
        }
        dispatch(getList({ token, params }))
    }, [])


    const render = prospectingSessions.length > 0 ? <>{elements}</> : <EmptyProspectingSessions />
    return (
        <>
            <Title>
                <h1>Prospects</h1>
            </Title>
            <Content>
                <div className="content">
                    <div className="subtitle">
                        <div className="header">
                            <p className="sort">Sort by</p>
                            <ul>
                                <li><Link className={sort === 'alphabet' ? 'active' : ''} to="/prospects?sort=alphabet">Alphabet</Link></li>
                                <li><Link className={sort === 'available' ? 'active' : ''} to="/prospects?sort=available">Prospects Available</Link></li>
                                <li><Link className={sort === 'last-activity' ? 'active' : ''} to="/prospects?sort=last-activity">Last Activity</Link></li>
                            </ul>
                        </div>
                    </div>

                    <Area>
                        {/* { elements } */}
                        {render}
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
    
    div.subtitle li {
        font-size: 12px;
        line-height: 150%;
    }
    
    a.active::after {
        content: "";
        height: 2px;
        background: #2BAEE0;
        display: block;
        margin-top: 2px;
        transition: background 0.5s ease 0s;
    } 
    
    a:after {
        content: "";
        height: 2px;
        background: transparent;
        display: block;
        margin-top: 2px;
        transition: background 0.5s ease 0s;
    }

    a {
        color: #122434;
    }
    
    div.subtitle li:not(:last-child) {
        margin-right: 22px;
    }

    & div.header {
        display: flex;
    }

    p.sort {
        font-size: 12px;
        line-height: 150%;
        color: #737373;
        margin-right: 26px;
        cursor: default;
    }
`
const Area = styled.div`
   display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: -12px -12px 0px;
    gap: 12px;
`