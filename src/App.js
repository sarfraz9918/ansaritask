import React, { useState } from 'react';


const App = () => {
  const [position, setPosition] = useState(0);

  const handleClick = (event) => {
    const screenWidth = window.innerWidth;
    const clickX = event.clientX;

    if (clickX < screenWidth / 2) {
      // Move left if the left half of the screen is clicked
      setPosition(prevPosition => prevPosition - 100);
    } else {
      // Move right if the right half of the screen is clicked
      setPosition(prevPosition => prevPosition + 100);
    }
  };

  return (
    <div className="App" onClick={handleClick}>
      <img
        src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif"
        alt="moving"
        className="movable-image"
        style={{ transform: `translateX(${position}px)`,width:"100px" }}
      />
    </div>
  );
};

export default App;
