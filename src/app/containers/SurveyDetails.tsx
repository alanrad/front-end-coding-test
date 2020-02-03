import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
// components
import {
  ListWrapper,
  ListHeader,
  DisplayDetails,
  Spinner,
} from 'app/components';
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
        <DisplayDetails details={details} />
      </ListWrapper>
    );
  } else {
    return <Spinner />;
  }
};

export const SurveyDetails = withRouter(Details);
