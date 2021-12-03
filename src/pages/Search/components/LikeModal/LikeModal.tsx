import * as React from 'react';
import styled from 'styled-components';
import { IconWrapper, Popup } from '../../../../common/components';
import { Button } from '../../../../common/components/Button';
import { BigLikeIcon, CannotSavedIcon } from '../../../../common/icons';

export interface ILikeModalProps {
    visible: boolean;
    title: string;
    close: () => void;
}

export function LikeModal({visible, title, close}: ILikeModalProps) {
    return (
        <Popup visible={visible}>
            <Container>
                <Image>
                    <IconWrapper>
                        <BigLikeIcon />
                    </IconWrapper>
                </Image>
                <Bottom>
                    <Title>{`${title} has been added to favorites`}</Title>
                    <Text>You can see the list of favorites on the dashboard page</Text>
                    <Button action={close} label="Done" />
                </Bottom>
            </Container>
        </Popup>
    );
}

const Container = styled.div`
    position: absolute;
    inset: auto 0px;
    border: none;
    background: rgb(255, 255, 255);
    overflow: auto;
    border-radius: 6px;
    outline: none;
    padding: 0px;
    margin: 0px auto;
    width: 100%;
    max-width: 333px;
`

const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 174px;
    background: rgb(242, 242, 242);
`
const Bottom = styled.div`
    padding: 24px;

    & button {
        border-radius: 6px;
        outline: none;
        border: none;
        width: 100%;
        height: 36px;
        color: rgb(255, 255, 255);
    }
`

const Title = styled.h2`
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    color: #122434;
    margin-bottom: 8px;
    text-align: center;
`

const Text = styled.div`
    font-size: 12px;
    line-height: 150%;
    color: #122434;
    margin-bottom: 32px;
    text-align: center;
`

// const Button = styled.button`
//     width: 100%;
//     border-radius: 6px;
//     border: 1px solid rgb(43, 174, 224);
//     transition: all 0.2s ease 0s;
//     padding: 10px 0px;
//     color: #122434;
//     background: rgb(255, 255, 255);
//     font-size: 12px;
//     line-height: 150%;
// `
