import React from 'react';
import { styles } from './styles.css';

function Result({ weightGoal, timetable }) {
  return (
    <div className="result">
      <h2 className="result-heading">Your weight goal: {weightGoal}</h2>
      <p>Your personalized exercise timetable:</p>
      <pre className="timetable">{timetable}</pre>
    </div>
  );
}

export default Result;
