import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../../../../common/components/Button';

interface FormData {
    email: string;
}

const ResetForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = data => console.log(data);

    return (
        <>
            <Container>
                <h3>Password Reset</h3>
                <p>Enter your email to receive instructions on how to reset your password.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input">
                        <Label>Email</Label>
                        <input placeholder="Enter email" {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                    </div>
                    <Button label="Reset" />
                </form>
            </Container>
            <LoginLink to="/login">Return to Login</LoginLink>
        </>
    )
}

export default ResetForm

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

    p { 
        font-size: 16px;
        line-height: 155%;
        color: #122434;
        margin-bottom: 30px;
    }

    & form {
        display: flex;
        flex-direction: column;
        margin-top: 54px;
    }

    & div.input {
        width: 100%;
        position: relative;
        margin-bottom: 24px;
    }

    & span.error {
        font-size: 12px;
        line-height: 150%;
        color: #F05658;
    }

    & input {
        width: 100%;
        color: #122434;
        font-size: 16px;
        line-height: 155%;
        background: rgb(255, 255, 255);
        border: 1px solid rgb(232, 232, 232);
        box-sizing: border-box;
        border-radius: 8px;
        padding: 10px 16px;
        outline: none;
    }

    & button {
        font-size: 16px;
        line-height: 150%;
        border-radius: 6px;
        border: 1px solid transparent;
        transition: all 0.2s ease 0s;
        padding: 10px 0px;
        font-weight: 500;
        margin-top: 16px;
    }
`

const Label = styled.label`
        font-size: 12px;
        line-height: 150%;
        color: #737373;
        margin-bottom: 4px;
`

const LoginLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 138px;
    height: 36px;
    font-size: 12px;
    line-height: 150%;
    background: rgba(18, 36, 52, 0.15);
    border-radius: 6px;
    font-weight: 500;
    
    color: rgb(255, 255, 255);
    margin: 0px auto 28px;

    &:hover {
        background: rgba(18, 36, 52, 0.25);
        cursor: pointer;
        transition: all 0.2s ease 0s;
    }
`
