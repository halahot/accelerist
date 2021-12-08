import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { SearchResult } from '../../common/components';
import withHeader from '../../common/hoc/withHeader'
import { getToken } from '../../state/ducks/auth';
import { companies, excel, getCompanies, getExcel } from '../../state/ducks/company';
import { getActiveList, getListById, updateList } from '../../state/ducks/savedList';
import fileDownload from 'js-file-download';
import { useLocation } from 'react-router';

interface Props {

}

const ProspectScreen = (props: Props) => {
    const { state } = useLocation();
    const token = useSelector(getToken);
    const companyList = useSelector(companies);
    const list = useSelector(getActiveList);
    const excelData = useSelector(excel);
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(state.isEdit)
    const [value, setValue] = useState(list?.name)
    const [filters, updateFilter] = useState(list?.filters)

    
    let query = useLocation();
    const id = useMemo(() => {
        const parts = query.pathname.split('/');
        return parts[parts.length - 1];
    }, [query])

    useEffect(() => {
        const params = {
            limit: 12,
            page: 1,
            ...filters
        }
        const data = {
            token,
            params
        }
        dispatch(getCompanies(data))
        dispatch(getListById({ token, id }))
    }, [])

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
            console.log('delete');
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

    const update = (ids: string[]) => {

        const newFilters = {
            ...filters,
            ids
        };

        updateFilter(newFilters);
    }

    console.log(list);

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

