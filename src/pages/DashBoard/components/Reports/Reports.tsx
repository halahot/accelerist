import * as React from 'react';
import styled from 'styled-components';
import samsung from '../../../../assets/samsung.png';
import nasa from '../../../../assets/nasa.png';
import { LoginTable } from '../LoginTable';

export interface IReportsProps {
}

export default function Reports(props: IReportsProps) {
  return (
    <Container>
      <div className="title">
        <Title>Reports</Title>
      </div>
      <Column>
        <Row>
          <Card>
            <span className="bold">SearchSessions</span>
            <div>
              <span className="gray">Total</span>
              <span className="bold">0</span>
            </div>
          </Card>
          <Card>
            <span className="bold">Sent Pitches</span>
            <div>
              <span className="gray">Company</span>
              <span className="bold">0</span>
            </div>
          </Card>
        </Row>
        <span className="bold">Top matched</span>
        <Row>
          <img width="83px" height="83px" src={samsung} />
          <img width="83px" height="83px" src={nasa} />
        </Row>
        <span className="bold">Last Login</span>
        <LoginTable />
      </Column>
    </Container>
  );
}


const Container = styled.section`
    display: flex;
    flex-direction: column;

    div.title {
      justify-content: space-between;
      height: 60px;
    }

    & span.bold {
        font-size: 24px;
        font-weight: 500;
        color: #122434;
        line-height: 148%;
        margin-bottom: 16px;
    }
    
    & span.gray {
        font-size: 12px;
        color: #bfbfbf;
        margin-top: 8px;
        line-height: 148%;
    }

    & img {
      border-radius: 6px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 18px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;

    & div {
      background-color: #f9f9f9;
      width: 235px;
      height: 71px;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
`

const Title = styled.h3` 
   font-weight: 500;
   font-size: 24px;
   line-height: 148%;
   margin-bottom: 22px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 536px;
    height: 498px;
    padding: 24px;
    border-radius: 6px;
`