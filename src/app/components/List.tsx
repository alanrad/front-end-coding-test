import React, { FC } from 'react';
// interfaces
import { IsurveyResult } from 'app/interfaces';
// components
import { ListSurveyItem, ListNotAvailable } from 'app/components';

interface Ilist {
  items: IsurveyResult[];
}

export const List: FC<Ilist> = ({ items }) => {
  if (!items.length) {
    return <ListNotAvailable />;
  }

  return (
    <>
      {items.map((item: IsurveyResult) => (
        <ListSurveyItem key={item.name} survey={item} />
      ))}
    </>
  );
};
