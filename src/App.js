import React, { useState } from 'react';
import rosa from './rosa.png';
import cors from './cors.png';
import ionixx from './ionixx.png';
import juntets from './juntets.png';
import './App.css';

function App() {
  const [ShowPage2, setShowPage2] = useState(false);
  const [ShowPage3, setShowPage3] = useState(false);

  const handleNextClick = () => {
    setShowPage2(true);
  };

  const handleNextClick2 = () => {
    setShowPage2(false);
    setShowPage3(true);
  };

  const handleBackClick = () => {
    setShowPage2(false);
    setShowPage3(false);
  };

  const handleBackClick2 = () => {
    setShowPage2(true);
    setShowPage3(false);
  };

  return (
    <div className="Section">
      {/* Pàgina 1 */}
      {!ShowPage2 && !ShowPage3 ? (
        <div className="Section">
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Pa la Ionixx</h1>
              <img src={rosa} className="App-logo" alt="logo" />
              <p className='App-text'>Regalito 4u 💕</p>
            </header>

          </div>
          <div>
            <button className='Next' onClick={handleNextClick}>--></button>
          </div>
        </div>
      ) : null}

      {/* Pàgina 2 */}
      {ShowPage2 && !ShowPage3 ? (
        <div className="Section">
          <img src={cors} className="Cors" alt="logo" />
          <div>
            <button className='Next' onClick={handleBackClick}>&lt;--</button>
          </div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Per la millor...</h1>
              <img src={ionixx} className="Foto" alt="logo" />
              <p className='App-text2'>T'ESTIMO</p>
            </header>
          </div>
          <div>
            <button className='Next' onClick={handleNextClick2}>--></button>
          </div>
        </div>
      ) : null}

      {/* Pàgina 3 */}
      {ShowPage3 ? (
        <div className="Section">
          <img src={cors} className="Cors" alt="logo" />
          <div>
            <button className='Next' onClick={handleBackClick2}>&lt;--</button>
          </div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">...del món</h1>
              <img src={juntets} className="Foto" alt="logo" />
              <p className='App-text2'>PER SEMPRE</p>
            </header>
          </div>
          
        </div>
      ) : null}
    </div>
  );
}

export default App;
