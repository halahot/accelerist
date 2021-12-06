import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { SearchResult } from '../../common/components';
import withHeader from '../../common/hoc/withHeader'
import { getToken } from '../../state/ducks/auth';
import { companies, getCompanies } from '../../state/ducks/company';

interface Props {

}

const ProspectScreen = (props: Props) => {
    const token = useSelector(getToken);
    const companyList = useSelector(companies);
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false)

    const onClickFirstBtn = () => {
        if(isEditMode) {
            console.log('update');
        } else {
            setIsEditMode(true);
        }
    }
    
    const onClickSecondBtn = () => {
        if(isEditMode) {
            setIsEditMode(false);
        } else {
            console.log('delete');
        }
    }

    return (
        <>
            <TitleContent>
                <div>
                    <input type="text" placeholder="No name" />
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
            <SearchResult companies={companyList.company}/>
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

    div {
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
`

