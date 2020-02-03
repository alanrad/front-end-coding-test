import React, { FC } from 'react';
// styles
import 'styles/spinner.css';

// pure css spinner
export const Spinner: FC = () => (
  <div className="spinner-wrapper">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
);
