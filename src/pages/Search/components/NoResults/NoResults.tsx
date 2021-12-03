import * as React from 'react';
import { NoImage } from '../../../../common/components/Card/components';

export interface INoResultsProps {
}

export function NoResults (props: INoResultsProps) {
  return (
    <div>
      <NoImage/>
      <p>No results</p>
    </div>
  );
}
