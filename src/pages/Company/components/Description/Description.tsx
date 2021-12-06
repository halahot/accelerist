import * as React from 'react';
import styled from 'styled-components';
import { IconWrapper } from '../../../../common/components';
import { GlobeIcon, MapIcon, PhoneIcon } from '../../../../common/icons';
import { CompanyModel } from '../../../../types/models';

export interface IDescriptionProps {
    company: CompanyModel | null;
}

export function Description({ company }: IDescriptionProps) {
    return (
        <Container>
            <Left>
                <div className="first-row">
                    <h3>Business Description Products</h3>
                </div>
                <h4>Description</h4>
                <div className="description-block">
                    <p className="description">{company?.descriptionList}</p>
                </div>
                <h4>Reported</h4>
                <Reported>
                    <div className="reported-content">
                        <div className="section">
                            <p className="gray">Revenue reported</p>
                            <p className="digit">{`$ ${company?.revenue}`}</p>
                        </div>
                        <div className="section">
                            <p className="gray">Employees reported</p>
                            <p className="digit">{company?.employeeCount}</p>
                        </div>
                    </div>
                </Reported>
                {company?.ticker && <><h4>Company Ticker</h4>
                    <div className="blocks">
                        <div className="ticker-item">
                            <div className="ticker-text">{company?.ticker}</div>
                        </div>
                    </div></>}
                <h4>Company Contacts</h4>
                <Contacts>
                    <div className="sitephone">
                        <div>
                            <IconWrapper style={{ marginRight: '12px' }}><GlobeIcon /></IconWrapper>
                            <a href={company?.website}>{company?.website}</a>
                        </div>
                        <div>
                            <IconWrapper style={{ marginRight: '12px' }}><PhoneIcon /></IconWrapper>
                            <a href={`tel:${company?.phone}`}>{company?.phone}</a>
                        </div>
                    </div>
                    <div>
                        <IconWrapper style={{ marginRight: '12px' }}><MapIcon /></IconWrapper>
                        <p>{`${company?.street ? company?.street : ''} 
                    ${company?.city ? company?.city : ''} 
                    ${company?.state ? company?.state : ''} 
                    ${company?.country ? company?.country : ''} 
                    ${company?.zipCode ? company?.zipCode : ''}`}</p>
                    </div>
                </Contacts>
                <div className="first-row">
                    <h3>Social Impact</h3>
                </div>
                <div className="blocks">
                    <div className="block">
                        <h4>Type of Investment</h4>
                        <div>
                            <p>No Information</p>
                        </div>
                    </div>
                    <div className="block">
                        <h4>CSR Focus</h4>
                        <div>
                            <p>No Information</p>
                        </div>
                    </div>
                </div>
                <div className="first-row">
                    <h3>SDG Goal Alignment</h3>
                </div>
                <div className="no-selected">No selected goal</div>
                <h4>Contributions</h4>
                <Contributions>
                    <div className="row">
                        <div className="cell">
                            <p>Cash contributions</p>
                            <p>-</p>
                        </div>
                        <div className="cell">
                            <p>Employee contributions</p>
                            <p>-</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell">
                            <p>Total Social contributions</p>
                            <p>-</p>
                        </div>
                        <div className="cell">
                            <p>In Kind contributions</p>
                            <p>-</p>
                        </div>
                    </div>                   
                </Contributions>
                <h4>Charitable Focus & Programs</h4>
                <p style={{marginBottom: '40px'}}>No information</p>
                <h3>GRI Compliant</h3>
                <p style={{marginBottom: '40px'}}>Yes</p>
                <h3>Customer Demographics</h3>
            </Left>
            <div className="right" />
        </Container>
    );
}

const Container = styled.div`
    background: rgb(255, 255, 255);
    display: flex;

    div.right {
        padding: 32px 40px;
        width: 100%;
        max-width: 366px;
    }

`

const Left = styled.div`
    padding: 32px 40px;
    border-right: 1px solid rgb(235, 235, 235);
    width: 100%;
    max-width: 730px;
    
    h4 { 
        font-weight: 500;
        font-size: 16px;
        line-height: 145%;
        margin-bottom: 16px;
    }

    div.first-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
    }

    div.description-block {
        margin-bottom: 48px;
        position: relative;
    }

    div.blocks{
        display: flex;
        margin-bottom: 32px;
    }

    div.blocks > div.block {
        width: 50%;
    }
    
    div.blocks > div.block > div {
        border: 1px solid rgb(232, 232, 232);
        box-sizing: border-box;
        border-radius: 6px;
        padding: 24px;
    }
    
    div.blocks > div.block:first-child {
        margin-right: 24px;
    }
    
    div.ticker-item{
        border: 1px solid rgb(232, 232, 232);
        box-sizing: border-box;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        padding: 15px 26px;
    }
    
    div.ticker-text{
        font-weight: 500;
        font-size: 24px;
        line-height: 148%;
    }

    div.no-selected {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 15px;
        width: 112px;
        height: 112px;
        background: rgb(242, 242, 242);
        border-radius: 6px;
        font-weight: 500;
        font-size: 16px;
        line-height: 145%;
        text-align: center;
        margin-bottom: 20px;
    }
       
`

const Reported = styled.div`
        width: 100%;
        border: 1px solid rgb(232, 232, 232);
        box-sizing: border-box;
        border-radius: 6px;
        margin-bottom: 32px;
    
    div.reported-content {
        display: flex;
    }
    
    div.reported-content > div:first-child {
        border-right: 1px solid rgb(232, 232, 232);
    }

    div.section {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 13px 0px;
    }

    p.gray {
        font-size: 12px;
        line-height: 150%;
        color: #737373;
        margin-bottom: 4px;
    }
    
    p.digit {
        font-weight: 500;
        font-size: 16px;
        line-height: 145%;
    }
`

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 18px;
    border: 1px solid rgb(232, 232, 232);
    box-sizing: border-box;
    border-radius: 6px;
    font-size: 12px;
    line-height: 150%;
    margin-bottom: 50px;

    div.sitephone {
        margin-bottom: 15px;
    }
    
    div.sitephone > div:first-child {
        margin-right: 10px;
    }

    div {
        display: flex;
        align-items: center;
    }

    a {
        color: #122434;
    }
`

const Contributions = styled.div`
    width: 100%;
    border: 1px solid rgb(232, 232, 232);
    box-sizing: border-box;
    border-radius: 6px;
    margin-bottom: 32px;

    div.row {
        display: flex;
    }
    
    div.row:not(:first-child) {
        border-top: 1px solid rgb(232, 232, 232);
    }

    div.cell {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 13px 0px;
    } 
    
    div.cell:first-child {
        border-right: 1px solid rgb(232, 232, 232);
    }
`
