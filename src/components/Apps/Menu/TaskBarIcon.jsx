import { useState } from 'react';
import eIcon from '/images/e-button-icon.png';
import Menu from './Menu';

const TaskBarIcon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className="hover:bg-[#bababb] p-1"
      >
        <img src={eIcon} alt="super key icon" className="w-10" />
      </button>
    </div>
  );
};

export default TaskBarIcon;
