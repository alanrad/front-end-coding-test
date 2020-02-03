import React, { FC } from 'react';
// components
import { ListWrapper, ListHeader, List, Spinner } from 'app/components';
// utils
import { useSurveyResults } from 'utils';

export const SurveysList: FC = () => {
  const { surveyResults } = useSurveyResults();

  if (surveyResults.length) {
    return (
      <ListWrapper>
        <ListHeader title="Survey Results" />
        <List items={surveyResults} />
      </ListWrapper>
    );
  } else {
    return <Spinner />;
  }
};
