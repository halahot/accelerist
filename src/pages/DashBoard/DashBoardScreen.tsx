import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import WithHeader from '../../common/hoc/withHeader'
import { isAuthorized } from '../../state/ducks/auth'
import { Favorites } from './components/Favorites'
import { Posts } from './components/Posts'
import ProspectingSessions from './components/ProspectingSessions/ProspectingSessions'
import { Reports } from './components/Reports'
import { SeeMore } from './components/SeeMore'
interface Props {

}

const DashBoardScreen = (props: Props) => {
    const isAuthorizedUser = useSelector(isAuthorized);

    return (
        <Container>
            {!isAuthorizedUser && <Navigate to="/login" />}
            <Content>
                <Title>DashBoard</Title>
                <main>
                    <div className="main">
                        <ProspectingSessions />
                        <Row>
                            <Favorites />
                            <Reports />
                        </Row>
                    </div>
                </main>
            </Content>
        </Container>
    )
}

export default WithHeader(DashBoardScreen);

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
    padding: 32px 60px 20px;

}
    & div.main {
        width: fit-content;
        padding-top: 16px;
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
    gap: 24px;
`

