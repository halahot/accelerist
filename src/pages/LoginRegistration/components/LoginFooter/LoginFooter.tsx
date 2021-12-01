import { useState } from 'react';
import styled from 'styled-components'
import CheckBox from '../CheckBox/CheckBox'

interface Props {
    remember?: (isRemember: boolean) => {}
}

const LoginFooter = ({ remember }: Props) => {
    const [isRemember, setIsRemember] = useState(false);

    const onCheck = () => {
        setIsRemember(!isRemember)
    }

    return (
        <Container>
            <div className="checkbox">
                <CheckWrapper isCheck={isRemember} onClick={onCheck}>
                    {isRemember && <CheckBox />}
                </CheckWrapper>
                <span>Remember</span>
            </div>
            <Link href="#">Forgot Password?</Link>
        </Container>
    )
}

export default LoginFooter

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 12px;
    text-align: center;

    & div.checkbox {
        display: flex;
        flex-direction: row;
    }
    
    & div.checkbox > span {
        line-height: 155%;
        margin-left: 10px;
        color: #122434;
        cursor: pointer;
    }

`

interface CheckWrapperProps {
    readonly isCheck: boolean;
}

const CheckWrapper = styled.div<CheckWrapperProps>`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid #E8E8E8;
    background: ${(props => props.isCheck ? '#CAF0FF' : '#fff')};
    cursor: pointer;
`
const Link = styled.a`
    line-height: 150%;
    color: #737373;
    border: 1px solid transparent;

    &:hover {
        color: #122434;
        cursor: pointer;
        transition: all 0.2s ease 0s;
    }
`
