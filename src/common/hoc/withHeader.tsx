import * as React from 'react';
import styled from 'styled-components';
import { HeaderLink } from '../../pages/DashBoard/components/HeaderLink';
import { Logo } from '../../pages/LoginRegistration/components';
import { Ava } from '../components/Ava';
import { SearchInput } from '../components/SearchInput';

interface IWithHeaderProps {
}

function WithHeader<T>(Component: React.ComponentType<T>) {

    return (props: T) => (
        <Container>
            <header>
                <Logo />
                <HeaderLink path="/" title="DashBoard" />
                <HeaderLink path="/login" title="Audience" />
                <HeaderLink path="/login" title="Pricing" />
                <HeaderLink path="/login" title="Prospecting" />
                <HeaderLink path="/login" title="ROI" />
                <HeaderLink path="/login" title="Upgrade Membership" />
                <SearchInput />
                <Ava />
            </header>
            <Component {...props} />
        </Container>
    );

};

export default WithHeader;

const Container = styled.div`
    width: 100%;
    height: 80px;

    & header {
        display: flex;
        align-items: center;
        justify-content: start;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #D4F3FF;
        padding-left: 60px;
        gap: 28px;
}
`
