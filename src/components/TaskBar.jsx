import eIcon from '/images/e-button-icon.png';
import Clock from './Clock';
import FullScreen from './FullScreen';
import { useAppContext } from '../AppContext';

//TODO ADD ALL IMG

const appsImg = {
  'calc.app': '/images/calculator-2.svg',
  'My PC': '/images/monitor.svg',
  terminal: '/images/terminal.svg',
  'about-me.txt': '/images/note.svg',
};

const TaskBar = () => {
  const { activeApps } = useAppContext();
  return (
    <div className="absolute bottom-0 w-full z-50">
      <div className="bg-[#e4dbee] shadow-sm shadow-black flex justify-between items-center">
        <div className=" p-0 flex gap-5 justify-center items-center">
          <button className="p-1 hover:bg-[#bababb] ">
            <img src={eIcon} alt="super key icon" className="w-10" />
          </button>
          <div className="flex gap-3">
            {activeApps.map((app) => {
              return (
                <img src={appsImg[app]} alt={app} className="w-8" key={app} />
              );
            })}
          </div>
        </div>

        <div className="pr-5 flex items-center  justify-center gap-3">
          <FullScreen />
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
