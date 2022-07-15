import { useState } from 'react';

import Button from './components/Button/Component';
import DisplayableValueBox from './components/DisplayableValueBox/Component';

import './App.css';
import reactLogo from './assets/images/logo192.png';

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = 
    () => setClicks((currentClicks) => currentClicks + 1);

  const handleReset =
    () => setClicks(0);

  return (
    <div className="App">
      <img
        id="logo"
        className='rotate'
        src={reactLogo}
        alt="React Logo" />

      <DisplayableValueBox value={clicks} />

      <Button onClick={handleClick} text='Click' />
      <Button classNames='danger' text='Reset' onClick={handleReset} />
    </div>
  );
}

export default App;
