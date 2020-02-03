import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// interfaces
import { IsurveyResultDetail } from 'app/interfaces';
// components
import { RatingStars } from 'app/components';
// utils
import { numberToPercentage, getAverageofNumbers } from 'utils';

interface IdisplayDetails {
  details: IsurveyResultDetail;
}

interface IsurveyQuestions {
  description: string;
  responses: number[];
}

export const DisplayDetails: FC<IdisplayDetails> = ({ details }) => {
  const { response_rate: participationRate, themes } = details;
  const surveyQuestions: IsurveyQuestions[] = [];
  // use `for loop` for larger data set as it's more performant
  themes.forEach(({ questions }) =>
    questions.forEach(({ description, survey_responses: surveyResponses }) => {
      surveyQuestions.push({
        description,
        responses: surveyResponses
          .map(({ response_content: responseContent }) =>
            Number(responseContent)
          )
          .filter(rating => rating > 0),
      });
      return surveyResponses
        .map(({ response_content: responseContent }) => Number(responseContent))
        .filter(rating => rating > 0);
    })
  );

  return (
    <div className="survey-details">
      <Link to="/surveys-results">Go Back</Link>
      <p className="title">
        Participation Rate: {numberToPercentage(participationRate)}
      </p>
      {surveyQuestions.map(({ description, responses }: IsurveyQuestions) => (
        <div key={description}>
          <div className="description-box">
            <p>{description}</p>
          </div>
          <RatingStars rating={getAverageofNumbers(responses)} />
        </div>
      ))}
    </div>
  );
};
