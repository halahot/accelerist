import React from 'react'
import { SubmitHandler } from 'react-hook-form';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { Button } from '../../../../common/components/Button';

interface Props {
    onSubmit?: (data: FormData) => void;
    isLogin: boolean;
}

type FormData = {
    email: string,
    password: string,
};

export const Inputs = ({isLogin}: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = data => console.log(data);

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter email" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
                <input placeholder="Enter password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
                <Button label={isLogin ? 'Login' : 'Registration'}/>
            </form>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    & form {
        display: flex;
        flex-direction: column;
    }
`
