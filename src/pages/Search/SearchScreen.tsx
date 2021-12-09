import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { SearchResult } from '../../common/components';
import WithHeader from '../../common/hoc/withHeader';
import { getToken } from '../../state/ducks/auth';
import { companies, getCompanies, getPageInfo } from '../../state/ducks/company';
import { FilterData } from '../../types';
import { Filter } from './components';
import { SearchInput } from './components/SearchInput';

interface Props {

}

const SearchScreen = (props: Props) => {
    const loadCompanies = useSelector(companies);
    const pageInfo = useSelector(getPageInfo);
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const [shownFilter, setShownFilter] = useState(false);
    const [page, setPage] = useState(1);
    const [params, setParams] = useState<FilterData>({ limit: 12 });

    useEffect(() => {
        const data = {
            token,
            params : { 
                ...params,
                page
            }
        }
        dispatch(getCompanies(data));
    }, [params, page])

    return (
        <Container>
            <Title>
                <Header>
                    <Search>Search</Search>
                    <SearchInput setFilter={setParams} showFilter={() => setShownFilter(!shownFilter)} />
                </Header>
                {shownFilter && <Filter closeFilter={() => setShownFilter(false)} setFilter={setParams} />}
            </Title>
            <Content><SearchResult setPage={setPage} pageInfo={pageInfo} filter={params} companies={loadCompanies.company} isFilter={Object.keys(params).length > 2} /></Content>
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

    @media (max-width: 768px) {
        padding: 0px 32px;
    }
    
    @media (max-width: 375px) {
        padding: 0px 16px;
        flex-direction: column;
        align-items: start;
    }
`
const Search = styled.h1`
    font-weight: 500;
    font-size: 32px;
    line-height: 150%;
    color: #122434;
    margin-right: 80px;

    @media (max-width: 768px) {
        margin-right: 32px;
    }
`
