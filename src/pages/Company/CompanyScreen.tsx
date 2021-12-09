import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import styled from 'styled-components'
import { IconWrapper } from '../../common/components'
import withHeader from '../../common/hoc/withHeader'
import { ArrowIcon, LikeIcon, NoImageIcon, RedLike } from '../../common/icons'
import { getToken } from '../../state/ducks/auth'
import { dislike, getCompanyById, getCurrentCompany, like as fetchlike } from '../../state/ducks/company'
import { CompanyModel } from '../../types/models'
import { Description } from './components'

interface Props {

}

const CompanyScreen = (props: Props) => {
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const company = useSelector(getCurrentCompany);
    const navigate = useNavigate();

    let query = useLocation();
    const id = useMemo(() => {
        const parts = query.pathname.split('/');
        return parts[parts.length - 1];
    }, [query])

    useEffect(() => {
        dispatch(getCompanyById({ token, id }))
    }, [])

    const addToFavorite = async() => {
        const data = {
            token,
            id
        }
        if (company?.like) {
            await dispatch(dislike(data))
        } else {
            await dispatch(fetchlike(data))
        }
        dispatch(getCompanyById({ token, id }))
    }

    const goBack = () => {
       navigate(-1);
    }

    return (
        <>
            <Title>
                <div>
                    <button onClick={goBack}>
                        <IconWrapper style={{ marginRight: '17px', transform: 'rotate(180deg)' }}><ArrowIcon /></IconWrapper>
                    </button>
                    <h1>Corporate Profile</h1>
                </div>
            </Title>
            <Content>
                <div className="content">
                    <Info>
                        <div className="name">
                            <div className="name-content">
                                <Image><IconWrapper><NoImageIcon /></IconWrapper></Image>
                                <div>
                                    <div className="organization-name">
                                        <h3>{company?.name}</h3>
                                        <LikeButton onClick={addToFavorite}>
                                            <IconWrapper>{company?.like ? <RedLike /> : <LikeIcon />}</IconWrapper>
                                        </LikeButton>
                                    </div>
                                    <p className="information">No information</p>
                                </div>
                            </div>
                        </div>
                        <Description company={company}/>
                    </Info>
                </div>
            </Content>
        </>
    )
}

export default withHeader(CompanyScreen)

const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 60px;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    height: 96px;

    div { 
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    button { 
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 150%;
        color: #122434;
        transition: all 0.5s ease 0s;
        background-color: rgb(255, 255, 255);
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
`

const Info = styled.div`
    width: 100%;
    max-width: 1096px;

    div.name {
        display: flex;
        justify-content: flex-start;
        background: rgb(242, 242, 242);
        padding: 40px;
        align-items: center;
    }

    div.name-content {
        display: flex;
        align-items: center;
    }
    
    div.organization-name {
        display: flex;
        align-items: center;
    }

    h3 {
        font-weight: 500;
        font-size: 24px;
        line-height: 150%;
    }

    p.information {
        font-size: 12px;
        line-height: 150%;
        margin-bottom: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        max-width: 750px;
    }
`

const Image = styled.div`
    background: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 100px;
    height: 100px;
    margin-right: 26px;
`

const LikeButton = styled.div`
    height: 40px;
    width: 40px;
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
`
