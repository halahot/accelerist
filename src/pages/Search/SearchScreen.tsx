import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import WithHeader from '../../common/hoc/withHeader';
import { getToken } from '../../state/ducks/auth';
import { companies, getCompanies } from '../../state/ducks/company';
import { FilterData } from '../../types';
import { Filter } from './components';
import { SearchInput } from './components/SearchInput';
import { SearchResult } from './components/SearchResult';

interface Props {

}

const SearchScreen = (props: Props) => {
    const loadCompanies = useSelector(companies);
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const [shownFilter, setShownFilter] = useState(false);
    const [params, setParams] = useState<FilterData>({ limit: 12, page: loadCompanies.currentPage });

    useEffect(() => {
        const data = {
            token,
            params
        }
        console.log(data);
        dispatch(getCompanies(data));
    }, [params])

    return (
        <Container>
            <Title>
                <Header>
                    <Search>Search</Search>
                    <SearchInput setFilter={setParams} showFilter={() => setShownFilter(!shownFilter)} />
                </Header>
                {shownFilter && <Filter closeFilter={() => setShownFilter(false)} setFilter={setParams} />}
            </Title>
            <Content><SearchResult isFilter={Object.keys(params).length > 2} /></Content>
        </Container>
    )
}

export default WithHeader(SearchScreen);


const Container = styled.div`
`

const Content = styled.div`
    background: rgb(249, 249, 249);
    min-height: calc(100vh - 176px);
`

const Title = styled.div`
    background: rgb(249, 249, 249);
`

const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 60px;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    height: 96px;
`
const Search = styled.h1`
    font-weight: 500;
    font-size: 32px;
    line-height: 150%;
    color: #122434;
    margin-right: 80px;
`
