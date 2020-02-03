import React, { FC } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
// components
import { ListWrapper, ListHeader, RatingStars, Spinner } from 'app/components';
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
  const { details } = useSurveyDetails(id);
  if (typeof details !== 'undefined') {
    const { name } = details;
    return (
      <ListWrapper>
        <ListHeader title={name} />
        <RatingStars rating={3} />
        <Link to="/surveys-results">View More</Link>
      </ListWrapper>
    );
  } else {
    return <Spinner />;
  }
};

export const SurveyDetails = withRouter(Details);
