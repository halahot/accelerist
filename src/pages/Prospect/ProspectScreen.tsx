import fileDownload from 'js-file-download';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { SearchResult } from '../../common/components';
import withHeader from '../../common/hoc/withHeader';
import { getToken } from '../../state/ducks/auth';
import { companies, excel, getCompanies, getExcel, getPageInfo } from '../../state/ducks/company';
import { deleteList, getActiveList, getListById, updateList } from '../../state/ducks/savedList';

interface Props {

}

const ProspectScreen = (props: Props) => {
    const { state } = useLocation();
    const token = useSelector(getToken);
    const companyList = useSelector(companies);
    const list = useSelector(getActiveList);
    const excelData = useSelector(excel);
    const pageInfo = useSelector(getPageInfo);
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(state?.isEdit)
    const [value, setValue] = useState(list?.name)
    const [page, setPage] = useState(1);
    const [filters, updateFilter] = useState(list?.filters)
    const navigate = useNavigate();

    let query = useLocation();
    const id = useMemo(() => {
        const parts = query.pathname.split('/');
        return parts[parts.length - 1];
    }, [query])

    useEffect(() => {
        if (list === null) navigate('/prospects')
    }, [list])

    useEffect(() => {
        const params = {
            limit: 12,
            page: page,
            ...filters
        }
        const data = {
            token,
            params
        }
        dispatch(getCompanies(data))
        dispatch(getListById({ token, id }))
    }, [filters, page])

    const onClickFirstBtn = () => {
        if (isEditMode) {
            const data = {
                token,
                id: list?.id,
                data: {
                    name: value,
                    filters
                }
            }
            dispatch(updateList(data));
            setIsEditMode(false);
        } else {
            setIsEditMode(true);
        }
    }

    const onClickSecondBtn = () => {
        if (isEditMode) {
            setIsEditMode(false);
        } else {
            const data = {
                token,
                id: list?.id
            }
            dispatch(deleteList(data))

        }
    }

    const exportToExcel = async () => {
        const params = {
            limit: 12,
            page: 1,
            ...filters
        }
        const data = {
            token,
            params: params
        }
        await dispatch(getExcel(data));
        if (excelData) fileDownload(excelData.file, excelData.name);
    }

    const update = (deleteIds: string[]) => {

        const newFilters = {
            ...filters,
            deleteIds
        };

        updateFilter(newFilters);
        const data = {
            token,
            id: list?.id,
            data: {
                name: list?.name ? list?.name : 'No name',
                filters: newFilters
            }
        }
        dispatch(updateList(data));
    }

    return (
        <>
            <TitleContent>
                <div className="title-content">
                    {isEditMode ?
                        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="No name" /> :
                        <p className="name">{value ? value : 'No name'}</p>
                    }
                    <div className="buttons">
                        <button className="first" onClick={onClickFirstBtn}>
                            {isEditMode ? 'Save' : 'Edit'}
                        </button>
                        <button className="second" onClick={onClickSecondBtn}>
                            {isEditMode ? 'Cancel' : 'Delete'}
                        </button>
                    </div>
                </div>
            </TitleContent>
            <Results><SearchResult
                pageInfo={pageInfo}
                setPage={setPage}
                filter={list?.filters}
                companies={companyList.company}
                isEditMode={isEditMode}
                updateFilter={update}
                excel={exportToExcel}
                isSavedSearch={true} />
            </Results>
        </>
    )
}

export default withHeader(ProspectScreen)

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 60px;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    height: 96px;

    div.title-content {
        width: 1096px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input {
        width: 800px;
        height: 48px;
        font-weight: 500;
        font-size: 32px;
        line-height: 150%;
        border: none;
        color: #122434;
    }

    p.name {
        width: 800px;
        height: 48px;
        font-weight: 500;
        font-size: 32px;
        line-height: 150%;
        border: none;
        color: #122434;
        padding: 0px 2px;
    }

    button {
        cursor: pointer;
        background-color: rgb(255, 255, 255);
    }

    div.buttons {
        display: flex;
    }

    button.first {
        border: 1px solid rgb(43, 174, 224);
        transition: all 0.2s ease 0s;
        padding: 8px 0px;
        width: 82px;
        color: #122434;
        font-size: 12px;
        line-height: 150%;
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
    }

    button.second {
        width: 76px;
        line-height: 150%;
        border-radius: 6px;
        border: 1px solid rgb(232, 232, 232);
        transition: all 0.2s ease 0s;
        color: #F05658;
        background: rgb(255, 255, 255);
        font-size: 12px;
        padding: 8px 0px;
    }
`

const Results = styled.div`
    background: rgb(249, 249, 249);
    min-height: calc(100% - 176px);
`

