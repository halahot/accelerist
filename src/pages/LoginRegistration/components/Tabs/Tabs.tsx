import React, { useState } from 'react'
import styled from 'styled-components'
import { Inputs } from '../Inputs';
import { LoginFooter } from '../LoginFooter';
import { RegistrationFooter } from '../RegistrationFooter';

interface Props {
}

const Tabs = (props: Props) => {
    const [isActiveRegister, setIsActiveRegister] = useState(false);
    const [isActiveLogin, setIsActiveLogin] = useState(true);

    const setRegister = () => {
        setIsActiveRegister(true);
        setIsActiveLogin(false);
    }

    const setLogin = () => {
        setIsActiveRegister(false);
        setIsActiveLogin(true);
    }

    return (
        <Container>
            <Header>
                <Switch isActive={isActiveRegister} onClick={setRegister}>Register</Switch>
                <Switch isActive={isActiveLogin} onClick={setLogin}>Login</Switch>
            </Header>
            <Inputs isLogin={isActiveLogin} />
        </Container>
    )
}

export default Tabs

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    background: rgb(248, 248, 248);
    border-radius: 6px;
    padding: 2px 3px;
    
`
interface SwitchProps {
    readonly isActive: boolean;
}

const Switch = styled.a<SwitchProps>`
    border-radius: 6px;
    color: var(--darkGray);
    background: ${props => props.isActive ? '#CAF0FF' : '#fff'};
    color: ${props => props.isActive ? '#122434' : '#737373'};
    text-align: center;
    flex: 1 1 0%;
    font-size: 12px;
    padding: 9px 0px;
    line-height: 150%;
`