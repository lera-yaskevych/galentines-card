import { useState } from 'react';
import cuteDoggo from '/cute-doggo.png';
import hoorayGif from '/hooray.gif';
import './App.css';
import { getDisappointmentText, getReliefText } from './lib/helpers';
import Signature from './components/Signature';
import Image from './components/Image';
import Button from './components/Button';

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
        <Image src={cuteDoggo} alt="Cute Doggo" />
      </div>
      <h1>Will you be my Galentine?</h1>
      <div className="text_container">
        {count === 0 && (
          <p className="hint">{`(Your destiny is predefined, but you can try testing the No button)`}</p>
        )}
      </div>
      <div className="button_container">
        <Button onClick={handleAcceptance}>Yes</Button>
        {count > 5 || <Button onClick={handleRejection}>No</Button>}
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
        {isExcitementShown && <Image src={hoorayGif} alt="Hooray Gif" />}
      </div>
      <Signature />
    </>
  );
};

export default App;
