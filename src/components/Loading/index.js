// == Import : npm
import React from 'react';

// == Import : local
import './loading.scss';
import spinner from 'src/assets/spinner.png';

// == Component
const Loading = () => (
  <div className="spinner">
    <div className="spinner-img">
      <img src={spinner} alt="spinner" />
    </div>
  </div>
);

// == Export
export default Loading;
