import React from 'react'

interface Props {
    children?: React.ReactNode;
}

const Tab = (props: Props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Tab
