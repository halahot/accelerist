import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconWrapper } from '../../../../common/components';
import { CloseIcon, SelectIcon } from '../../../../common/icons';
import { SelectItem } from './SelectItem';

export interface ISelectInputProps {
    options?: string[];
    value?: string[];
    onChange?: (arg: string[]) => void;
}

export function SelectInput({ options, value, onChange }: ISelectInputProps) {
    const [v, setValue] = useState<string[]>([]);
    const [open, setOpen] = useState(false);

    const addVal = (val: string, id: number) => {
        const newVal = v
        newVal?.splice(id, 1, val);
        setValue(newVal);
    }

    useEffect(()=>{
        if(onChange) {
            onChange(v);
        }
    }, [v])

    const removeVal = (id: number) => {
        const newVal = v;
        newVal?.splice(id, 1);
        setValue(newVal);
    }

    const els = options?.map((item, index) =>
        <SelectItem key={index} val={item} addVal={addVal} removeVal={removeVal} id={index} />
    )
    return (
        <Container>
            <div className="dropdown-container">
                <div className="dropdown-heading" onClick={() => setOpen(!open)}>
                    <div className="dropdown-heading-value">
                        {v.length > 0 ? <span style={{ color: '#122434' }}>{v.join(', ')}</span> : <span>Select...</span>}
                    </div>
                    {v.length > 0 && <IconWrapper onClick={() => setValue([])}><CloseIcon /></IconWrapper>}
                    <IconWrapper style={{ paddingLeft: '8px', paddingBottom: '5px' }}>
                        <SelectIcon />
                    </IconWrapper>
                </div>
                {open && <div className="dropdown-content">
                    {els}
                </div>}
            </div>
        </Container>
    );
}

const Container = styled.div`
    position: relative;

    & div.dropdown-container {
        box-sizing: border-box;
        transition: all 0.2s ease;
        border: 1px solid #E8E8E8;
        border-radius: 6px;
    }
    
    & div.dropdown-heading {
        box-sizing: border-box;
        transition: all 0.2s ease;
        position: relative;
        padding: 0 16px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 46px;
        cursor: default;
        outline: 0;
    }
    
    & div.dropdown-heading-value {
        box-sizing: border-box;
        transition: all 0.2s ease;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex: 1;
    }
    
    & div.dropdown-content {
        box-sizing: border-box;
        transition: all 0.2s ease;
        max-height: 181px;
        overflow: scroll;
    }

    & span {
        font-weight: normal;
        font-size: 16px;
        line-height: 155%;
        color: #737373;
    }
`
