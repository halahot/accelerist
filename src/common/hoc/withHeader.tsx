import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderLink } from '../../pages/DashBoard/components/HeaderLink';
import { Logo } from '../../pages/LoginRegistration/components';
import { IconWrapper } from '../components';
import { Ava } from '../components/Ava';
import { SearchInput } from '../components/SearchInput';
import { MenuIcon } from '../icons/MenuIcon';
import { Menu } from './components';


function WithHeader<T>(Component: React.ComponentType<T>) {
    const WithHeader = (props: T) => {
        const [shown, setShown] = useState(false);

        return (
            <Container>
                <header>
                    <Link className="logo" to="/"><Logo /></Link>
                    <div className="links">
                        <HeaderLink path="/" title="DashBoard" />
                        <HeaderLink path="/login" title="Audience" />
                        <HeaderLink path="/login" title="Pricing" />
                        <HeaderLink path="/login" title="Prospecting" />
                        <HeaderLink path="/login" title="ROI" />
                        <HeaderLink path="/login" title="Upgrade Membership" />
                        <SearchInput />
                        <Ava />
                    </div>
                    <div className="menu" onClick={() => setShown(true)}><MenuIcon /></div>
                    <Menu visible={shown} onClose={() => setShown(false)} />
                </header>
                <Component {...props} />
            </Container>
        )
    };

    return WithHeader;
};

export default WithHeader;

const Container = styled.div`
    width: 100%;
    height: 80px;

    a.logo {
        margin-right: 49px;
    }

    & header {
        display: flex;
        align-items: center;
        justify-content: start;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #D4F3FF;
        padding-left: 60px;
        

        div.links {
            display: flex;
            gap: 28px;
            align-items: center;
        }

        @media (max-width: 768px) {
             padding: 32px;
             justify-content: space-between;

             & div.links {
                 display: none;
                 
             }

             div.menu {
                 display: block;
             }
             
        }
}

div.menu {
    display: none;
}
`
