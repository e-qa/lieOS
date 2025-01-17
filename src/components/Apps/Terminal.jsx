import { useRef, useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const TerminalApp = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    setOutput([
      'Welcome to lieOS Terminal!, Type "help" to see available commands.',
    ]);
  }, []);

  const handleCommand = () => {
    let newOutput;

    switch (command.toLowerCase()) {
      case 'help':
        newOutput =
          'Available commands: help, about, clear, name, version, developer, motivation';
        break;

      case 'about':
        newOutput =
          'LieOS is a web-based platform inspired by modern operating systems. With features like a terminal, calculator, file explorer, and more.';
        break;

      case 'clear':
        setOutput([]);
        setCommand('');
        return;

      case 'name':
        newOutput = 'Platform name: LieOS';
        break;

      case 'version':
        newOutput = 'LieOS version: 1.0.0';
        break;

      case 'developer':
        newOutput =
          'LieOS was developed by a passionate individual who loves combining creativity with technology.';
        break;

      case 'motivation':
        newOutput =
          'LieOS was created to bring the elegance of operating systems to the web. The goal is to merge functionality with creativity!';
        break;

      default:
        newOutput = `Command not found: ${command}`;
        break;
    }

    setOutput((prev) => [...prev, `> ${command}`, newOutput]);
    setCommand('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  return (
    <div onClick={() => inputRef.current.focus()}>
      <div className="bg-[#e4dbee] w-full h-10 p-3 flex justify-end border-b border-cyan-50 items-center shadow-inner">
        <div className="bg-red-900 text-white">
          <MdClose size={30} />
        </div>
      </div>
      <div className="w-[40rem] h-96 bg-black overflow-y-auto p-4">
        <div className="text-white flex flex-col">
          {output.map((line, index) => (
            <div key={index} className="flex flex-col">
              <p className="text-sm">
                <b className="text-pink-600">[lieOS]</b> &gt;&gt;
                <span className="text-yellow-400">/main/test</span>
              </p>
              <span className="text-green-500">{line}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <span className="text-white mt-[1.1rem] mr-2">&gt;</span>
          <input
            type="text"
            ref={inputRef}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => {
              handleKeyPress(e);
            }}
            className="bg-transparent text-white outline-none mt-4 w-full text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalApp;
