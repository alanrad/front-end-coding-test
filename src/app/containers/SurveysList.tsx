import React, { FC } from 'react';
// components
import { ListWrapper, ListHeader, List } from 'app/components';
// utils
import { useSurveyResults } from 'utils';

export const SurveysList: FC = () => {
  const { surveyResults } = useSurveyResults();

  return (
    <ListWrapper>
      <ListHeader title="Survey Results" />
      <List items={surveyResults} />
    </ListWrapper>
  );
};
