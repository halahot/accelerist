import * as React from 'react';
import styled from 'styled-components';
import { IconWrapper, SearchBtn } from '../../../../common/components';
import { FolderPlusIcon } from '../../../../common/icons';

export interface IEmptyProspectingSessionsProps {
}

export function EmptyProspectingSessions(props: IEmptyProspectingSessionsProps) {
    return (
        <Container>
            <IconWrapper><FolderPlusIcon /></IconWrapper>
            <p>No lists saved</p>
            <p className="second">Go to search page and add to saved list</p>
            <SearchBtn />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    border-radius: 6px;
    padding: 40px 0px 34px;

    p:first-child {
        font-weight: 500;
        font-size: 16px;
        line-height: 145%;
        margin-bottom: 6px;
    }

    p.second {
        font-size: 12px;
        line-height: 150%;
        color: #BFBFBF;
        margin-bottom: 30px;
    }
`