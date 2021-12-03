import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../assets/background.jpg';
import { isAuthorized } from '../../state/ducks/auth';
import { Logo } from './components';
import WrapForm from './components/WrapForm/WrapForm';

interface Props {

}

export const LoginRegistrationScreen = (props: Props) => {
    const isAuthorizedUser = useSelector(isAuthorized);
    return (
        <Container>
            {isAuthorizedUser && <Navigate to="/" />}
            <header>
                <Logo />
            </header>
            <Content>
                <WrapForm/>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 100%;

    & header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        background-color: #122434;
    }
`
const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 73px;
    min-height: calc(100% - 80px);
    background-image: url(${img});
    background-size: cover;
    background-position: 100% 100%;
`
