import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card, IconWrapper } from '../../../../common/components';
import { ArrowIcon, ExcelIcon, MailIcon, SaveIcon } from '../../../../common/icons';
import { getToken } from '../../../../state/ducks/auth';
import { companies, getCompanies } from '../../../../state/ducks/company';
import { EmptyFilterModal } from '../EmtyFilterModal';
import { LikeModal } from '../LikeModal';

export interface ISearchResultProps {
}

type PagePosition = {
    start: number,
    end: number
}

export function SearchResult(props: ISearchResultProps) {
    const loadCompanies = useSelector(companies);
    const dispatch = useDispatch();
    const [page, setPage] = useState<number>(loadCompanies.currentPage);
    const [visibleFilterModal, setVisibleFilterModal] = useState(false);
    const [filter, setFilter] = useState(null);
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
        dispatch(getCompanies(data));
    }, [page])

    const pagePosition = useMemo(() => {
        const { currentPage } = loadCompanies;
        const start = currentPage * 12 - 11;
        const end = currentPage * 12;
        return {
            start,
            end
        }
    }, [loadCompanies])

    const saveList = () => {
        if(!filter) {
            setVisibleFilterModal(true);
            return;
        }
    }

    const exportToExcel = () => {
        if(!filter) {
            setVisibleFilterModal(true);
            return;
        }
    }

    const sendToSupport = () => {

    }

    const closeEmptyFilterModal = () => {
        setVisibleFilterModal(false);
    }

    const companyComponents = loadCompanies.company?.map((company) =>
        <Card key={company.id} item={company} />)

    return (
        <Container>
            <Title>{`Found ${loadCompanies.count} companies`}</Title>
            <Actions>
                <Buttons>
                    <Button onClick={saveList}>
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
                    </Button>
                    <Button>
                        <Icon>
                            <IconWrapper>
                                <MailIcon />
                            </IconWrapper>
                        </Icon>
                        Accelerist Support
                    </Button>
                </Buttons>
                <Pages>
                    {loadCompanies.currentPage > 1 &&
                        <button onClick={() => setPage(page - 1)}>
                            <IconWrapper style={{ marginRight: '18px', transform: 'rotate(180deg)' }}><ArrowIcon /></IconWrapper>
                        </button>
                    }
                    <p>{`${pagePosition.start}-${pagePosition.end} of ${loadCompanies.count}`}</p>
                    {loadCompanies.currentPage !== loadCompanies.maxPages &&
                        <button onClick={() => setPage(page + 1)}>
                            <IconWrapper style={{ marginLeft: '18px' }}><ArrowIcon /></IconWrapper>
                        </button>
                    }
                </Pages>
            </Actions>
            <Organizations>
                {companyComponents}
            </Organizations>
            <EmptyFilterModal visible={visibleFilterModal} close={closeEmptyFilterModal}/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin: 0px auto;
    padding: 32px 20px 20px;

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
const Pages = styled.div`
    display: flex;
    align-items: center;

    & button {
        padding: 0px;
        border: 0px;
        background: 0px center;
        cursor: pointer;
    }
`
const Organizations = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin: -12px -12px 0px;
`