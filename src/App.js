import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Preline from './components/Preline';


function App() {

  const [loading, setLoading] = useState(true);

  // Simulate loading time using useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container mx-auto mt-8">
        <p className='text-red-500 font-semibold text-center text-xl'>Skeleton : 1</p>
        <Card isLoading={loading}/>
      </div>
      <div className="container mx-auto mt-8">
        <p className='text-red-500 font-semibold text-center text-xl'>Skeleton : 2</p>
        <Preline title="Card Title">
          <p>Card content</p>
        </Preline>
      </div>
    </>

  );
}

export default App;
