import Calculator from '../components/Apps/Calculator';
import TerminalApp from '../components/Apps/Terminal';
import Desktop from './Apps/MyPC/Desktop';
import MyPC from './Apps/MyPC/MyPc';

// !!!   CHANGE COMP NAME: DesktopApps

export const appComponents = {
  'calc.app': <Calculator />,
  'My PC': <MyPC />,
  terminal: <TerminalApp />,
  'note.txt': (
    <div className="p-4 bg-gray-800 text-white">Note app is here!</div>
  ),
};
