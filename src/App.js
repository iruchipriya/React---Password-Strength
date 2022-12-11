import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [pass, setPass] = useState('');
  const [strength, setStrength] = useState(0);

  const onChangeHandler = (event) => {
    const input = event.target.value;
    setPass(input);
    const len = input.length;
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    let strength = Math.min(6, Math.floor(input.length / 3));
    strength +=
      len > 3
        ? hasNumber.test(input) +
          hasUpperCase.test(input) +
          hasLowerCase.test(input) +
          hasSpecial.test(input)
        : 0;
    setStrength(strength);
  };

  const styles = {
    progressBar: {
      backgroundColor: strength > 8 ? 'green' : strength > 5 ? 'orange' : 'red',
      width: strength * 10 + '%',
    },
  };

  return (
    <div className="center">
      <h1>Enter the pasword</h1>
      <input
        type="text"
        min="8"
        max="32"
        placeholder="Enter Password...."
        onChange={onChangeHandler}
        value={pass}
      />
      <br />
      <br />

      <div className="progress-container">
        <div
          className="progress-bar"
          id="progressBar"
          style={styles.progressBar}
        ></div>
      </div>
    </div>
  );
}
