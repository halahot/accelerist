import { useMemo } from "react";
import styled from "styled-components";
import { IconWrapper } from "..";
import { PageInfo } from "../../../types";
import { ArrowIcon } from "../../icons";

type PagePosition = {
    start: number,
    end: number
}

interface Props {
    pageInfo: PageInfo;
    setPage: (arg: number) => void;
}

export function Pages({ pageInfo: { currentPage, totalItems, totalPages }, setPage }: Props) {

    const pagePosition: PagePosition = useMemo(() => {
        const start = currentPage * 12 - 11;
        let end = currentPage * 12;
        if (end > totalItems) {
            end = totalItems;
        }
        return {
            start,
            end
        }
    }, [totalItems])

    return (
        <Container>
            {currentPage > 1 &&
                <button onClick={() => setPage(currentPage - 1)}>
                    <IconWrapper style={{ marginRight: '18px', transform: 'rotate(180deg)' }}><ArrowIcon /></IconWrapper>
                </button>}
            <p>{`${pagePosition.start}-${pagePosition.end} of ${totalItems}`}</p>
            {currentPage !== totalPages &&
                <button onClick={() => setPage(currentPage + 1)}>
                    <IconWrapper style={{ marginLeft: '18px' }}><ArrowIcon /></IconWrapper>
                </button>}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;

    & button {
        padding: 0px;
        border: 0px;
        background: 0px center;
        cursor: pointer;
    }

    @media (max-width: 375px) {
        display: none;
    }
`