import { useState, useEffect } from 'react';

function Timer() {

  const [timer, setTimer] = useState(1);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000)

    return () => { // clean up function
        clearInterval(intervalId);
    }

  }, [])

  return (
    <>
      <h1>{timer}</h1>
    </>
  );
}

export default Timer;