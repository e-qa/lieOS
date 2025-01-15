import { FaBatteryFull } from 'react-icons/fa';
import { MdFullscreen } from 'react-icons/md';

const FullScreen = () => {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div className="hover:bg-[#bababb] p-1">
      <button onClick={toggleFullScreen}>
        <MdFullscreen className="text-3xl" />
      </button>
      <button>
        <FaBatteryFull className="text-3xl" />
      </button>
    </div>
  );
};

export default FullScreen;
