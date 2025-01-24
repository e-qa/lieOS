import { useState } from 'react';
import eIcon from '/images/e-button-icon.png';
import Menu from './Menu';

const TaskBarIcon = () => {
  const [isFalse, setIsFalse] = useState(false);

  return (
    <div>
      {isFalse && <Menu />}
      <button
        onClick={() => {
          setIsFalse(!isFalse);
        }}
        className="hover:bg-[#bababb] p-1"
      >
        <img src={eIcon} alt="super key icon" className="w-10" />
      </button>
    </div>
  );
};

export default TaskBarIcon;
