import React, { FC, ReactNode } from 'react';
import { times } from 'utils';
// styles
import 'styles/rating.css';

interface IstarRating {
  rating: number;
}

// returns an array of span elements to produce ☆☆☆☆☆
export const makeRatingStarsRow = (rating: number) => {
  const starts: ReactNode[] = [];
  times(5)(num => {
    starts.push(
      <span key={num} className={num <= rating ? `selected` : ``}>
        ☆
      </span>
    );
  });
  return starts.reverse();
};

// rating stars component - 0 to 5
export const RatingStars: FC<IstarRating> = ({ rating = 0 }) => (
  <div className="rating">{makeRatingStarsRow(rating)}</div>
);
