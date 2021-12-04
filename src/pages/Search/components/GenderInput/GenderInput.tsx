import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Item } from './Item';

export interface IGenderInputProps {
    value?: string;
    onChange: (v: string) => void;
}

export type ItemType = {
    text: string;
    isActive: boolean;
}

const items = [
    {text: 'Male', isActive: false},
    {text: 'Female', isActive: false},
    {text: 'Both', isActive: true},
]

export function GenderInput({ value, onChange }: IGenderInputProps) {
    console.log('render');

    const [v, setValue] = useState(items);

    useEffect(() => {
        const arr: ItemType[] = v.filter((v) => v.isActive)
        onChange(arr[0].text);
    }, [v])

    const setActive = (id: number) => {
        console.log(id);
        // const arr = it
        items.forEach(v => v.isActive = false)
        console.log(items);
        items[id].isActive = true;
        setValue(items);
    }

    const components = v.map((item, index) => 
        <Item key={index} item={item} id={index} setIsActive={setActive}/>
    )

    return (
        <Container>
            {components}
        </Container>
    );
}

const Container = styled.ul`
    background: rgb(248, 248, 248);
    border-radius: 6px;
    width: 100%;
    display: flex;
    list-style: none;

`