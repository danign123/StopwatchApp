import Stopwatch from "./components/Stopwatch/Stopwatch.js";
import Button from "./components/Button/Button.js";
import React, {useEffect, useState} from "react";

const App = () => {

  const [time, setTime] = useState(0)
  const [timerOn, setTimeOn] = useState(false)

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn])

  return (
    <div className="App">
      <div>
        <Stopwatch time={time} />
      </div>
      <div>
        <Button setTime={setTime} setTimeOn={setTimeOn}/>
      </div>
    </div>
  );
}

export default App;
