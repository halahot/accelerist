import React from 'react'
import styled from 'styled-components'

interface Props {

}

const RegistrationFooter = (props: Props) => {
    return (
        <Container>
            <p>
                I agree that by clicking
                “<strong>Registration</strong>” I accept the
                <a href="#"> Terms Of Service </a>
                and
                <a href="#"> Privacy Policy</a>
            </p>
        </Container>
    )
}

export default RegistrationFooter

const Container = styled.div`
    font-size: 12px;
    text-align: center;
    line-height: 150%;
    color: #737373;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;

    & a {
        color: #122434;
    }
`
