import * as React from 'react';
import styled from 'styled-components';
import { Logo } from '../../pages/LoginRegistration/components';

interface IWithHeaderProps {
}

const WithHeader: React.FC<IWithHeaderProps> = (props) => {
    return (
        <Container>
            <header>
                <Logo />
            </header>
            {props.children}
        </Container>
    );

};

export default WithHeader;

const Container = styled.div`
height: 100%;
width: 100%;

& header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    background-color: #D4F3FF;
}
`
