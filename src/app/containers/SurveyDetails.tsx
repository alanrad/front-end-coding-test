import React, { FC } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
// components
import { ListWrapper, ListHeader } from 'app/components';
// utils
import { useSurveyDetails } from 'utils';

interface IpathParams {
  id: string;
}

const Details: FC<RouteComponentProps<IpathParams>> = ({
  match: {
    params: { id },
  },
}) => {
  const { surveyResultDetail } = useSurveyDetails(id);
  console.log(surveyResultDetail);

  return (
    <ListWrapper>
      <ListHeader title="Survey Details" />
      <Link to="/surveys-results">View More</Link>
    </ListWrapper>
  );
};

export const SurveyDetails = withRouter(Details);
