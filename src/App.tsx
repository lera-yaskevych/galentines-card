import { useState } from 'react';
import cuteDoggo from '/cute-doggo.png';
import hoorayGif from '/hooray.gif';
import './app.css';
import { getDisappointmentText, getReliefText } from './lib/helpers';

const App = () => {
  const [count, setCount] = useState(0);
  const [isExcitementShown, showExcitement] = useState(false);

  const handleRejection = () => {
    showExcitement(false);
    setCount((count) => count + 1);
  };

  const handleAcceptance = () => {
    showExcitement(true);
  };

  return (
    <>
      <div>
        <img width="300px" src={cuteDoggo} className="logo" alt="Cute Doggo" />
      </div>
      <h1>Will you be my Valentine?</h1>
      <div className="button_container">
        <button className="button" onClick={handleAcceptance}>
          Yes
        </button>
        {count > 5 || (
          <button className="button" onClick={handleRejection}>
            No
          </button>
        )}
      </div>
      <div className="text_container">
        {count > 0 && (
          <p>
            {isExcitementShown
              ? getReliefText(count)
              : getDisappointmentText(count)}
          </p>
        )}
      </div>
      <div className="gif_container">
        {isExcitementShown && (
          <img
            width="300px"
            src={hoorayGif}
            className="logo"
            alt="Cute Doggo"
          />
        )}
      </div>
    </>
  );
};

export default App;
