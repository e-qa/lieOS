import PropTypes from 'prop-types';
import { useAppContext } from '../../../AppContext';

const Menu = ({ setIsMenuOpen }) => {
  const { activeApps, setActiveApps } = useAppContext();

  const handleAppActivation = (appName) => {
    if (activeApps.includes(appName)) return;
    setActiveApps((prev) => [...prev, appName]);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Terminal', app: 'terminal', delay: 100 },
    { name: 'My PC', app: 'My PC', delay: 100 },
    { name: 'About-me.txt', app: 'about-me.txt', delay: 100 },
    { name: 'Calculator', app: 'calc.app', delay: 100 },
  ];

  return (
    <div className="w-64 h-80 bg-[#e4dbee] absolute bottom-[3rem] border-b-2 shadow-[4px_-3px_0px_1px_rgba(0,_0,_0,_0.1)] font-perfect-dos">
      <ul className="text-xl pt-4 flex flex-col gap-2">
        {menuItems.map(({ name, app }) => (
          <li
            key={app}
            className="pl-4 hover:bg-blue-500 shadow animate-slide-in"
          >
            <button onClick={() => handleAppActivation(app)}>{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Menu.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default Menu;
