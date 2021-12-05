import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card, IconWrapper } from '..';
import { EmptyFilterModal } from '../../../pages/Search/components/EmtyFilterModal';
import { NoFavComp } from '../../../pages/Search/components/NoFavComp';
import { NoResults } from '../../../pages/Search/components/NoResults';
import { getToken } from '../../../state/ducks/auth';
import { fetchFavorites, getCompanies, getCurrentPage } from '../../../state/ducks/company';
import { getCount } from '../../../state/ducks/company/selectors';
import { CompanyModel } from '../../../types/models';
import { ExcelIcon, MailIcon, SaveIcon } from '../../icons';
import { Pages } from './Pages';

export interface ISearchResultProps {
    isFilter?: boolean;
    isFavorite?: boolean;
    companies: CompanyModel[];
}

export function SearchResult({ companies, isFilter, isFavorite }: ISearchResultProps) {
    const currentPage = useSelector(getCurrentPage);
    const [page, setPage] = useState<number>(currentPage);
    const count = useSelector(getCount);
    const dispatch = useDispatch();

    const [visibleFilterModal, setVisibleFilterModal] = useState(false);
    const token = useSelector(getToken);


    useEffect(() => {
        const params = {
            limit: 12,
            page
        }
        const data = {
            token,
            params
        }

        const updateList = isFavorite ? fetchFavorites : getCompanies(data)
        dispatch(updateList);
    }, [page])

    const saveList = () => {
        if (!isFilter) {
            setVisibleFilterModal(true);
            return;
        }


    }

    const exportToExcel = () => {
        if (!isFilter) {
            setVisibleFilterModal(true);
            return;
        }
    }

    // const sendToSupport = () => {

    // }

    const closeEmptyFilterModal = () => {
        setVisibleFilterModal(false);
    }

    const companyComponents = companies?.map((company) =>
        <Card key={company.id} item={company} />)

    const emtyContainer = isFavorite ? <NoFavComp /> : <NoResults />

    return (
        <Container>
            {!isFavorite && <Title>{`Found ${count} companies`}</Title>}
            <Actions>
                {!isFavorite ? <Buttons>
                    {count > 0 && <> <Button onClick={saveList}>
                        <Icon>
                            <IconWrapper>
                                <SaveIcon />
                            </IconWrapper>
                        </Icon>
                        Save List
                    </Button>
                        <Button onClick={exportToExcel}>
                            <Icon>
                                <IconWrapper>
                                    <ExcelIcon />
                                </IconWrapper>
                            </Icon>
                            Export to Excel
                        </Button></>}
                    <Button>
                        <Icon>
                            <IconWrapper>
                                <MailIcon />
                            </IconWrapper>
                        </Icon>
                        Accelerist Support
                    </Button>
                </Buttons> : <Title>{`Found ${count} companies`}</Title>}
                {count > 0 && <Pages page={page} setPage={setPage} />}
            </Actions>
            <Organizations>
                {companyComponents?.length > 0 ? companyComponents : emtyContainer}
            </Organizations>
            <EmptyFilterModal visible={visibleFilterModal} close={closeEmptyFilterModal} />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin: 0px auto;
    padding: 32px 60px 20px;

    & button {
        cursor: pointer;
    }
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    color: #122434;
    font-style: normal;
    margin-bottom: 26px;
`
const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 27px;
    max-width: 1096px;
`

const Buttons = styled.div`
    display: flex;
`
const Icon = styled.div`
    margin-right: 17px;
`

const Button = styled.div`
    margin-right: 40px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    color: #122434;
    cursor: pointer;
`
const Organizations = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: -12px -12px 0px;
`
