import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IconWrapper } from "..";
import { getCurrentPage } from "../../../state/ducks/company";
import { getCount, getMaxPages } from "../../../state/ducks/company/selectors";
import { ArrowIcon } from "../../icons";

type PagePosition = {
    start: number,
    end: number
}

interface Props {
    page: number;
    setPage: (arg: number) => void;
}

export function Pages({ page, setPage }: Props) {
    const currentPage = useSelector(getCurrentPage);

    const count = useSelector(getCount);
    const maxPages = useSelector(getMaxPages);

    const pagePosition: PagePosition = useMemo(() => {
        const start = currentPage * 12 - 11;
        let end = currentPage * 12;
        if (end > count) {
            end = count;
        }
        return {
            start,
            end
        }
    }, [count])

    return (
        <Container>
            {page > 1 &&
                <button onClick={() => setPage(page - 1)}>
                    <IconWrapper style={{ marginRight: '18px', transform: 'rotate(180deg)' }}><ArrowIcon /></IconWrapper>
                </button>}
            <p>{`${pagePosition.start}-${pagePosition.end} of ${count}`}</p>
            {page !== maxPages &&
                <button onClick={() => setPage(page + 1)}>
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