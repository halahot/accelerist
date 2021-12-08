import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Card, IconWrapper, Tags } from '..';
import { EmptyFilterModal } from '../../../pages/Search/components/EmtyFilterModal';
import { NoFavComp } from '../../../pages/Search/components/NoFavComp';
import { NoResults } from '../../../pages/Search/components/NoResults';
import { getToken } from '../../../state/ducks/auth';
import { fetchFavorites, getCompanies, getCurrentPage, getExcel } from '../../../state/ducks/company';
import { getCount } from '../../../state/ducks/company/selectors';
import { createList, getActiveList } from '../../../state/ducks/savedList';
import { FilterData, SavedListRequest } from '../../../types';
import { CompanyModel } from '../../../types/models';
import { ExcelIcon, MailIcon, SaveIcon } from '../../icons';
import { Pages } from './Pages';

export interface ISearchResultProps {
    isFilter?: boolean;
    isSavedSearch?: boolean;
    isFavorite?: boolean;
    filter?: FilterData;
    companies: CompanyModel[];
    isEditMode?: boolean;
    updateFilter?: (ids: string[]) => void;
    excel?: () => void;
}

export function SearchResult({ excel, filter, companies, isFilter, isSavedSearch, isFavorite, isEditMode, updateFilter }: ISearchResultProps) {
    const currentPage = useSelector(getCurrentPage);
    const list = useSelector(getActiveList);
    const currentSearch = useSelector(getActiveList)
    const [page, setPage] = useState<number>(currentPage);
    const [ids, setIds] = useState(list?.filters.deleteIds);
    const [width, setWidth] = useState(0)
    const count = useSelector(getCount);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [visibleFilterModal, setVisibleFilterModal] = useState(false);
    const token = useSelector(getToken);


    useEffect(() => {

        if (isSavedSearch) {
            return;
        }

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

    const saveList = async () => {
        if (!isFilter) {
            setVisibleFilterModal(true);
            return;
        }

        delete filter?.limit
        delete filter?.page

        const data: SavedListRequest = {
            token,
            data: {
                prospectsAvailable: count,
                filters: filter
            }
        }

        await dispatch(createList(data));
        const path = `/prospects/${currentSearch?.id}`;
        navigate(path, { state: { isEdit: true } });
    }

    const exportToExcel = async () => {
        if ((isSavedSearch || isFilter) && excel) {
            excel();
            return;
        }
        if (!isFilter) {
            setVisibleFilterModal(true);
            return;
        }
    }

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])

    // const sendToSupport = () => {

    // }

    const closeEmptyFilterModal = () => {
        setVisibleFilterModal(false);
    }

    const setFilterIds = (isAdded: boolean, id: string) => {

        let newids = ids ? ids : [];
        if (isAdded) {
            newids.push(id)
        } else {
            const index = newids.findIndex((v) => v === id);
            if (index > -1) {
                newids.splice(index, 1);
            }
        }

        setIds(newids);
        if (updateFilter) {
            updateFilter(newids);
        }
    }

    const companyComponents = companies?.map((company) =>
        <Card key={company.id} item={company} setIsDelete={setFilterIds} isEdit={isEditMode} />)

    const emtyContainer = isFavorite ? <NoFavComp /> : <NoResults />

    return (
        <Container>
            {!isFavorite && <Title>{isSavedSearch ? `${count} companies` : `Found ${count} companies`}</Title>}
            {isSavedSearch && <Tags filter={filter} />}
            <Actions>
                {!isFavorite ? <Buttons>
                    {count > 0 && <> {!isSavedSearch && <Button onClick={saveList}>
                        <Icon>
                            <IconWrapper>
                                <SaveIcon />
                            </IconWrapper>
                        </Icon>
                        {width < 400 ? 'Save' : 'Save List'}
                    </Button>}
                        <Button onClick={exportToExcel}>
                            <Icon>
                                <IconWrapper>
                                    <ExcelIcon />
                                </IconWrapper>
                            </Icon>
                            {width < 400 ? 'Excel' : 'Export to Excel'}
                        </Button></>}
                    {!isSavedSearch && <Button>
                        <Icon>
                            <IconWrapper>
                                <MailIcon />
                            </IconWrapper>
                        </Icon>
                        {width < 400 ? 'Support' : 'Accelerist Support'}
                    </Button>}
                    {ids && ids.length > 0 && <Button>
                        <Icon>
                            <IconWrapper>
                                <MailIcon />
                            </IconWrapper>
                        </Icon>
                        Delete
                    </Button>}
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

    @media (max-width: 768px) {
        padding: 32px;
    }
    
    @media (max-width: 375px) {
        padding: 16px;
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
