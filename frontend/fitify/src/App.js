import React, { useState } from 'react';
import Axios from 'axios';
import Result from './Result';
import { styles } from './styles.css';

 
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError(null);

    try {
      const response = await Axios.post('http://localhost:3001/', {
        weight,
        height,
        age,
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again later.');
    } finally {
      setSubmitted(false); // Reset loading state
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Exercise Timetable Generator</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="input"
        />
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          className="input"
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="input"
        />
        <button type="submit" disabled={submitted} className="submit-btn">
          Generate Timetable
        </button>
      </form>
      {result && <Result weightGoal={result.weightGoal} timetable={result.timetable} />}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
