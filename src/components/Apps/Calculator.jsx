import { useState } from 'react';
import Close from '../Close';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleInput = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    'C',
    '0',
    '=',
    '+',
  ];

  return (
    <div className="w-96 rounded-sm">
      <Close name="calc.app" />
      <div className="bg-[#999999] text-black w-full p-4 shadow-lg">
        <div className="mb-4 p-2 bg-yellow-300  text-right text-lg font-perfect-dos">
          {input || '0'}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleInput(btn)}
              className={`p-4 text-lg font-semibold font-perfect-dos rounded focus:outline-none transition text-white ${
                btn === '='
                  ? 'bg-black'
                  : btn === 'C'
                  ? 'bg-red-700 hover:bg-red-600'
                  : 'bg-black'
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
