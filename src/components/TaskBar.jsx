import eIcon from '/images/e-button-icon.png';
import Clock from './Clock';
import FullScreen from './FullScreen';

const TaskBar = () => {
  return (
    <div className="absolute bottom-0 w-full z-50">
      <div className="bg-[#e4dbee] shadow-sm shadow-black flex justify-between items-center">
        <div className=" hover:bg-[#bababb] p-0">
          <button className="pl-2">
            <img src={eIcon} alt="super key icon" className="w-10" />
          </button>
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
