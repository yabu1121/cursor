
import './App.css';
import { useState } from 'react';

const App = () => {
  const [mousePosition,setMousePosition] = useState({x:0,y:0});
  const moveMouse = (e) => {
    setMousePosition({x: e.clientX, y:e.clientY});
  }
  const [isPressed,setIsPressed] = useState(false);

  const handleDown = () => {
    setIsPressed(true);
  }

  const handleUp = () => {
    setIsPressed(false);
  }

  let memo;
  if(isPressed){
    memo = 'clicked!!';
  }else{
    memo = 'unClicked!!';
  }

  const Go = () => {
    alert('aaa');
  }

  return (
    <div
      className='main'
      onMouseMove={moveMouse}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
    >
      <h1>Hello <br />there!</h1>
      <h2>座標</h2>
      <p>x : {mousePosition.x} , y : {mousePosition.y}</p>
      <h2>クリック</h2>
      <p>{memo}</p>
      <div
        className="custom-cursor"
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
        }}
      ></div>
      <button onClick={Go}>aaa</button>
    </div>
  );
}

export default App;