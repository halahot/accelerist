import * as React from 'react';
import styled from 'styled-components';
import { HeaderLink } from '../../../../pages/DashBoard/components/HeaderLink';
import { IconWrapper, Popup } from '../../../components';
import { Ava } from '../../../components/Ava';
import { SearchInput } from '../../../components/SearchInput';
import { CloseIcon } from '../../../icons';

export interface IMenuProps {
    visible: boolean;
    onClose: () => void;
}

export function Menu({ visible, onClose }: IMenuProps) {
    return (
        <Popup visible={visible}>
            <Content>
                <IconWrapper style={style} onClick={() => onClose()}><CloseIcon /></IconWrapper>
                <div className="content">
                    <div className="links">
                        <HeaderLink path="/" title="DashBoard" />
                        <HeaderLink path="/login" title="Audience" />
                        <HeaderLink path="/login" title="Pricing" />
                        <HeaderLink path="/login" title="Prospecting" />
                        <HeaderLink path="/login" title="ROI" />
                        <HeaderLink path="/login" title="Upgrade Membership" />
                    </div>
                    <Ava />
                </div>
            </Content>
        </Popup>
    );
}

const Content = styled.div`
    width: 330px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    padding: 40px 32px;

    @media (max-width: 375px) {
        width: 100%;
    }


    div.content {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div.content > div.links {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 32px;
    }
`

const style = {
    display: 'flex',
    justifyContent: 'end',

}