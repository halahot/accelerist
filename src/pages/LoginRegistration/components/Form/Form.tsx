import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import { Tabs } from '../Tabs'

const Form = (props: RouteComponentProps) => {
    
    return (
        <Container>
            <h3>Welcome to Accelerist</h3>
            <Tabs/>
        </Container>
    )
}

export default Form

const Container = styled.div`
    width: 100%;
    max-width: 454px;
    background: rgb(255, 255, 255);
    border-radius: 6px;
    padding: 40px;
    
    & h3 {
        text-align: center;
        font-weight: 500;
        font-size: 24px;
        line-height: 148%;
        margin-bottom: 20px;
    }
`
