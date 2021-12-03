import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FilterData } from '../../../../types';
import { GenderInput } from '../GenderInput';
import { Input } from '../Input';
import { SelectInput } from '../SelectInput';

export interface IFilterProps {
    setFilter: (data: FilterData) => void;
    closeFilter: () => void;
}

const sdgGoals = ['No poverty', 'Zero Hunger', 'Good Health']
const ethnicities = ['Asian', 'Hispanic', 'White']
const income = ['$100K - $124K', '$125K or More', '$20K - $29K', '$30K - $39K', '$40K - $49K', '$50K - $74K', "$75K - $99K", 'Less than $20K']
const ages = ['18-20', '21-25', '26-30', '31-35', "36-40", '41-45', '46-50', '51-55', '56-60', '61-65', '66-70', '71-75', '75 +'];

export function Filter({ setFilter, closeFilter }: IFilterProps) {
    const { handleSubmit, control, reset } = useForm();

    const onSubmit = (data: FilterData )=> console.log(data);
    
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Filters</h2>
                <Mode><ul><li><button>Advanced</button></li></ul></Mode>
                <section style={{ marginTop: '32px' }}>
                    <Title>Company</Title>
                    <Row>
                        <Field>
                            <label>Industry</label>
                            <Controller
                                name="industry"
                                control={control}
                                render={({ field }) => <Input value={field.value} />}/>                            
                        </Field>
                        <Field>
                            <label>Geographic Location</label>
                            <Controller
                                name="location"
                                control={control}
                                render={({ field }) => <Input value={field.value} />}/>  
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <label>CSR Focus</label>
                            <SelectInput />
                        </Field>
                        <Field>
                            <label>Total Annual Contributions</label>
                            <Input placeholder="Enter total annual contributions"/>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <label>Min Revenue $</label>
                            <Input placeholder="Enter min revenue"/>
                        </Field>
                        <Field>
                            <label>Max Revenue $</label>
                            <Input placeholder="Enter max revenue"/>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <label>SDG Goals</label>
                            <SelectInput options={sdgGoals}/>
                        </Field>
                    </Row>
                </section>
                <section style={{ marginTop: '16px' }}>
                    <Title>Customer Demographics</Title>
                    <Row>
                        <Field>
                            <label>Gender</label>
                            <GenderInput/>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <label>Household Income</label>
                            <SelectInput options={income}/>
                        </Field>
                        <Field>
                            <label>Ethnicity</label>
                            <SelectInput options={ethnicities}/>
                        </Field>
                    </Row>
                    <Row>
                        <Field>
                            <label>Age</label>
                            <SelectInput options={ages}/>
                        </Field>
                    </Row>
                </section>
                <Buttons>
                    <button className="cancel" onClick={closeFilter}>Cancel</button>
                    <button type="submit" className="search">Search</button>
                </Buttons>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 32px 60px 20px;
    margin: 0px auto;

    & form {
        background: rgb(255, 255, 255);
        padding: 40px 40px 32px;
        width: 100%;
        max-width: 1095px;
    }

    & label {
        font-size: 12px;
        line-height: 150%;
        color: #737373;
        margin-bottom: 4px;
    }

    h2 { 
        font-weight: 500;
        font-size: 24px;
        line-height: 148%;
        color: #122434;
        margin-bottom: 18px;
    }
`

const Mode = styled.div`
    margin-bottom: 24px;
    width: 100%;
    position: relative;

    & ul {
        background: rgb(248, 248, 248);
        border-radius: 6px;
        width: 100%;
        display: flex;
        list-style: none;
    }

    & li { 
        width: 100%;
        display: flex;
        justify-content: center;
    }

    & button {
        height: 36px;
        width: 100%;
        font-weight: normal;
        font-size: 12px;
        line-height: 150%;
        background: rgb(212, 243, 255);
        border-radius: 6px;
        color: #122434;
        transition: all 0.3s ease-in 0s;
        border: none;
    }
`
const Title = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
    color: #122434;
    margin-bottom: 16px;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Field = styled.div`
    margin-bottom: 24px;
    width: calc(50% - 8px);
    position: relative;
`
const Buttons = styled.div`
    margin-top: 16px;
    display: flex;
    width: 308px;

    & button {
        flex: 1 1 0%;
        margin-right: 8px;
        font-size: 16px;
        line-height: 150%;
        border-radius: 6px;
        border: 1px solid rgb(232, 232, 232);
        transition: all 0.2s ease 0s;
        padding: 10px 0px;
        color: #122434;
        background: rgb(255, 255, 255);
    }

    & button.search {
        border: 1px solid transparent;
        font-weight: 500;
        background: #2BAEE0;
        color: rgb(255, 255, 255);
    }
`