import { useEffect, useState } from 'react';
import './App.css';
import AllApps from './components/AllApps';
import TaskBar from './components/TaskBar';
import RenderApp from './RenderApp';
import LoadingScreen from './components/LoadingScreen';
import { detecDevice } from './utils/utils';

function App() {
  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState(true);

  useEffect(() => {
    setDevice(detecDevice());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      {!device ? (
        <>
          <TaskBar />
          <AllApps />
          <RenderApp />
        </>
      ) : (
        <div className="bg-black w-screen h-screen text-white flex justify-center items-center">
          <h1 className=" text-4xl">Only works on desktop!</h1>
        </div>
      )}
    </>
  );
}

export default App;
