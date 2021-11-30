import React from 'react'
import styled from 'styled-components'
import { Logo } from '../LoginRegistration/components'
import { Favorites } from './components/Favorites'
import { HeaderLink } from './components/HeaderLink'
import ProspectingSessions from './components/ProspectingSessions/ProspectingSessions'
import { Reports } from './components/Reports'
import { SeeMore } from './components/SeeMore'

interface Props {

}

const DashBoardScreen = (props: Props) => {

    return (
        <Container>
            <header>
                <Logo />
                <HeaderLink path="/login" title="DashBoard" />
            </header>
            <Content>
                <Title>DashBoard</Title>
                <main>
                    <ProspectingSessions />
                    <Row>
                        <Favorites/>
                        <Reports/>
                    </Row>
                    <Row>
                        <span>Prospect Navigator</span>
                        <SeeMore/>
                    </Row>
                    <Row>
                        <Posts/>
                    </Row>
                </main>
            </Content>
        </Container>
    )
}

export default DashBoardScreen

const Container = styled.div`
height: 100%;
width: 100%;

& header {
    display: flex;
    flex-direction: row;
    align-items: center;    
    height: 80px;
    background-color: #D4F3FF;
}

& main {
    background-color: #E8E8E8;

}
`
const Content = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
`

const Title = styled.h3` 
   font-weight: 500;
   font-size: 24px;
   line-height: 148%;
   margin: 24px 60px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

