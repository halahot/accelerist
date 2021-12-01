import React from 'react'
import styled from 'styled-components'
import { Logo } from './components'
import img from '../../assets/background.jpg';
import { Form } from './components';
import WrapForm from './components/WrapForm/WrapForm';
//@ts-ignore
import { useLocation } from 'react-router-dom';

interface Props {

}

export const LoginRegistrationScreen = (props: Props) => {
    const match = useLocation()
    return (
        <Container>
            <header>
                <Logo />
            </header>
            <Content>
                <WrapForm/>
                {console.log(match)}
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
