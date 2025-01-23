import Calculator from '../components/Apps/Calculator';
import TerminalApp from '../components/Apps/Terminal';
import MyPC from './Apps/MyPC/MyPc';
import Note from './Apps/Note';

// !!!   CHANGE COMP NAME: DesktopApps

export const appComponents = {
  'calc.app': <Calculator />,
  'My PC': <MyPC />,
  terminal: <TerminalApp />,
  'about-me.txt': <Note />,
};
