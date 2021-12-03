import styled from "styled-components"

interface Props {
    children?: React.ReactNode;
    visible: boolean;
}

export const Popup = (props: Props) => {
    return (
        <PopupWrapper visible={props.visible}>
            {props.children}
        </PopupWrapper>
    )
}

interface WrapperProps {
    readonly visible: boolean;
}

const PopupWrapper = styled.div<WrapperProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    justify-content: center;
    top: 0;
    left: 0;
    display: ${(props) => props.visible ? "flex" : "none"};
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.4);
    align-items: center;
    z-index: 10;
`


