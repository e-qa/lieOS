/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Rnd } from 'react-rnd';

const Drag = ({ children, x = 240, y = 0 }) => {
  const [dimensions, setDimensions] = useState({
    x: x,
    y: y,
  });

  const handleDragStop = (e, d) => {
    setDimensions((prev) => ({ ...prev, x: d.x, y: d.y }));
  };

  return (
    <Rnd
      // size={{ width: dimensions.width, height: dimensions.height }}
      position={{ x: dimensions.x, y: dimensions.y }}
      onDragStop={handleDragStop}
      enableResizing={false}
      style={{
        cursor: 'default',
      }}
    >
      {children}
    </Rnd>
  );
};

export default Drag;
