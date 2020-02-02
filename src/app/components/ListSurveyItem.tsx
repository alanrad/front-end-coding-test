import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// interfaces
import { IsurveyResult } from 'app/interfaces';

interface IlistSurveytem {
  survey: IsurveyResult;
}

export const ListSurveyItem: FC<IlistSurveytem> = ({ survey }) => {
  // survey details mapping
  const {
    name,
    url,
    participant_count: numberOfParticipants,
    response_rate: participationRate,
    submitted_response_count: totalSubmitted,
  } = survey;

  return (
    <div className="list-item">
      <h3 className="title">{name}</h3>
      <p>Number of participants: {numberOfParticipants}</p>
      <p>Number of submitted response: {totalSubmitted}</p>
      <p>Participation Rate: {participationRate}</p>
      <Link to={url}>View More</Link>
    </div>
  );
};
