import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [messages, setMessages] = useState([]);

  const bootMessages = [
    'Booting lieOS...',
    'System initializing...',
    'Checking hardware...',
    'CPU: i9 @ 4.0GHz',
    'RAM: 32GB DDR4',
    'Detecting peripherals: Keyboard, Mouse, Display',
    'Loading kernel...',
    'Initializing system...',
    'Starting services...',
    'Verifying accounts...',
    'Security check: OK',
    'lieOS running...',
    'Welcome to LieOS!',
  ];

  useEffect(() => {
    let currentMessageIndex = 0;

    let interval = setInterval(() => {
      if (currentMessageIndex < bootMessages.length) {
        setMessages((prev) => [...prev, bootMessages[currentMessageIndex]]);
      } else {
        clearInterval(interval);
      }
      currentMessageIndex++;
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen text-white font-perfect-dos bg-black text-3xl flex flex-col p-8 gap-2">
      {messages.map((message, index) => (
        <span key={index}>{message}</span>
      ))}
    </div>
  );
};

export default LoadingScreen;
