import { useEffect, useState } from 'react';
import './App.css';
import AllApps from './components/AllApps';
import TaskBar from './components/TaskBar';
import RenderApp from './RenderApp';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <TaskBar />
      <AllApps />
      <RenderApp />
    </>
  );
}

export default App;
