import { useEffect, useState } from 'react';
import { FaBatteryFull } from 'react-icons/fa';
import { useAppContext } from '../AppContext';

const Battery = () => {
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const { brightness, setBrightness } = useAppContext();

  const handleInputChange = (e) => {
    setBrightness(Number(e.target.value));
  };

  useEffect(() => {
    document.documentElement.style.filter = `brightness(${brightness}%)`;
  }, [brightness]);

  const ToolTip = () => {
    return (
      <div className="w-80 h-40 bg-[#e4dbee] absolute bottom-[3rem] right-3 border-b-2 shadow-[4px_-3px_0px_1px_rgba(0,_0,_0,_0.1)] font-perfect-dos px-4">
        <div className="flex items-center gap-4">
          <FaBatteryFull className="text-6xl" />
          <p className="text-2xl">
            100% <span className="text-sm text-gray-900">Fully charged</span>
          </p>
        </div>
        <div className="mt-2">
          <label className="block text-xs text-gray-900 mb-1">
            Reduce screen brightness to save power:
          </label>
          <input
            type="range"
            value={brightness}
            min={10}
            max={100}
            step={10}
            onChange={handleInputChange}
            className="w-full bg-gray-300 border border-gray-600 h-3 rounded-none accent-gray-800"
          />
        </div>
        <div className="mt-2 text-sm text-gray-800 font-bold">
          Brightness:<span className="text-black">{brightness}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="hover:bg-[#bababb] py-[0.4rem]">
      {isToolTipOpen && <ToolTip />}
      <button onClick={() => setIsToolTipOpen(!isToolTipOpen)}>
        <FaBatteryFull className="text-3xl" />
      </button>
    </div>
  );
};

export default Battery;
