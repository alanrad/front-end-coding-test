import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// interfaces
import { IsurveyResult } from 'app/interfaces';

interface IlistSurveytem {
  survey: IsurveyResult;
}

export const ListSurveyItem: FC<IlistSurveytem> = ({ survey }) => {
  // survey details mapping
  const { name, url, participant_count: numberOfParticipants } = survey;

  return (
    <div className="list-item">
      <h3 className="title">{name}</h3>
      <p>{numberOfParticipants} Participants</p>
      <Link to={url}>View More</Link>
    </div>
  );
};
