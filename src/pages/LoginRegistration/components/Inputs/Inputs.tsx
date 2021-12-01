import React from 'react'
import { SubmitHandler } from 'react-hook-form';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../../../../common/components/Button';
import { signIn, signUp } from '../../../../state/ducks/auth';
import { LoginFooter } from '../LoginFooter';
import { RegistrationFooter } from '../RegistrationFooter';

interface Props {
    onSubmit?: (data: FormData) => void;
    isLogin: boolean;
}

type FormData = {
    email: string,
    password: string,
};

export const Inputs = ({ isLogin }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<FormData> = data => {
        const func = isLogin ? signIn : signUp;
        dispatch(func(data));    
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                    <Label>Email</Label>
                    <input placeholder="Enter email" {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                </div>
                <div className="input">
                    <Label>Password</Label>
                    <input placeholder="Enter password" {...register("password", { required: true })} />
                    {errors.password && <span className="error">This field is required</span>}
                </div>
                {isLogin ? <LoginFooter /> : <RegistrationFooter />}
                <Button label={isLogin ? 'Login' : 'Registration'} />
            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

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
    }
`
    const Label = styled.label`
        font-size: 12px;
        line-height: 150%;
        color: #737373;
        margin-bottom: 4px;
`
