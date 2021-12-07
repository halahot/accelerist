import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CheckBox, IconWrapper } from '..';
import { LikeModal } from '../../../pages/Search/components/LikeModal';
import { getToken } from '../../../state/ducks/auth';
import { dislike, like as fetchlike } from '../../../state/ducks/company';
import { CompanyModel } from '../../../types/models';
import { LikeIcon, RedLike } from '../../icons';
import { NoImage } from './components';

export interface ICardProps {
    item: CompanyModel
    isEdit?: boolean;
    setIsDelete?: (v: boolean, id: string) => void;
}

export function Card(props: ICardProps) {
    const [visibleModal, setVisibleModal] = useState(false);
    const token = useSelector(getToken);
    const dispatch = useDispatch();
    const { id, name, phone, street, city, state, country, zipCode, revenue, like } = props.item;

    const onClose = () => {
        setVisibleModal(false);
    }

    const addToFavorite = () => {
        setVisibleModal(true);
        const data = {
            token,
            id
        }
        if (like) {
            dispatch(dislike(data))
        } else {
            dispatch(fetchlike(data))
        }
    }

    const onChange = (v: boolean) => {
        if(props.setIsDelete) props.setIsDelete(v, id);
    }

    return (
        <Container>
            {props.isEdit && <CheckBox style={style} onChange={onChange}/>}
            <Left>
                <ImageWrap>
                    <IconWrapper>
                        <NoImage />
                    </IconWrapper>
                </ImageWrap>
                <Text>
                    <p className="Priority">Priority Ranking</p>
                    <p className="digit">4</p>
                </Text>
            </Left>
            <Right>
                <Information>
                    <OrganizationLink to={`/company/${id}`}>{name}</OrganizationLink>
                    <Address>{`${street ? street : ''} 
                    ${city ? city : ''} 
                    ${state ? state : ''} 
                    ${country ? country : ''} 
                    ${zipCode ? zipCode : ''}`}</Address>
                    <Phone>{phone}</Phone>
                </Information>
                <Revenue>
                    <CsrFocus>
                        <GrayText style={{ textAlign: 'left' }}>CSR Focus</GrayText>
                        <div><p>No Information</p></div>
                    </CsrFocus>
                    <RevenueInfo>
                        <GrayText>Revenue</GrayText>
                        <Bold>{`$${revenue}`}</Bold>
                    </RevenueInfo>
                </Revenue>
                <Buttons>
                    <Like onClick={addToFavorite}>
                        <IconWrapper>{like ? <RedLike /> : <LikeIcon />}</IconWrapper>
                    </Like>
                    <ProfileBtn>Profile</ProfileBtn>
                </Buttons>
            </Right>
            <LikeModal visible={visibleModal} close={onClose} title={name} />
        </Container>
    );
}

const Container = styled.section`
    width: 536px;
    min-height: 268px;
    background: rgb(255, 255, 255);
    border-radius: 6px;
    margin: 12px;
    padding: 26px 32px;
    display: flex;
    position: relative;
`

const Left = styled.div`
    border: 1px solid rgb(232, 232, 232);
    box-sizing: border-box;
    border-radius: 6px;
    width: 168px;
    height: 216px;
    margin-right: 16px;
`

const Right = styled.div`
    width: 100%;
`

const ImageWrap = styled.div`
    min-width: 166px;
    height: 156px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(232, 232, 232);
`

const Text = styled.div`
    text-align: center;

    & p.Priority { 
        color: #737373;
        margin: 8px 0px 2px;
        font-weight: normal;
        font-size: 12px;
        line-height: 150%;
    }

    & p.digit {
        font-weight: 500;
        font-size: 16px;
        line-height: 145%;
        color: #122434;
    }
`

const Information = styled.div`
    min-height: 100px;
`
const OrganizationLink = styled(Link)`
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    color: #122434;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 285px;
`

const Address = styled.div`
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    color: #737373;
    margin-bottom: 4px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 36px;
`

const Phone = styled.div`
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    color: #737373;
    margin-bottom: 28px;
`
const Revenue = styled.div`
    display: flex;
    border-bottom: 1px solid rgb(232, 232, 232);
    margin-bottom: 24px;
    width: 100%;
`

const CsrFocus = styled.div`
    max-width: 170px;
    width: 100%;
    border-right: 1px solid rgb(232, 232, 232);
    padding: 0px 20px 12px 0px;

    & div > p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 150%;
        color: #122434;
    }
`

const GrayText = styled.p`
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    color: #737373;
    margin-bottom: 4px;
    text-align: right;
`

const Bold = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #122434;
    text-align: right;
`

const RevenueInfo = styled.div`
    padding: 0px 0px 12px 20px;
    width: 100%;
`
const Buttons = styled.div`
    display: flex;
    align-items: center;
`
const ProfileBtn = styled.a`
    flex: 1 1 0%;
    color: #2BAEE0;
    text-align: center;
    font-weight: normal;
    border-radius: 6px;
    border: 1px solid rgb(43, 174, 224);
    transition: all 0.2s ease 0s;
    padding: 10px 0px;
    background: rgb(255, 255, 255);
    font-size: 12px;
    line-height: 150%;
`

const Like = styled.button`
    margin-right: 8px;
    height: 40px;
    width: 40px;
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(232, 232, 232);    
`

const style = {
    position: 'absolute',
    right: '8px',
    top: '8px',
}