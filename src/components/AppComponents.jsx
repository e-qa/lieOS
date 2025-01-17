import Calculator from '../components/Apps/Calculator';
import TerminalApp from '../components/Apps/Terminal';

export const appComponents = {
  'calc.app': <Calculator />,
  terminal: <TerminalApp />,
  'note.txt': (
    <div className="p-4 bg-gray-800 text-white">Note app is here!</div>
  ),
};
