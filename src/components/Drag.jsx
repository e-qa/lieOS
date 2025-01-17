/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Rnd } from 'react-rnd';

const Drag = ({ children, x = 250, y = 50 }) => {
  const [dimensions, setDimensions] = useState({
    x: x,
    y: y,
  });

  const handleDragStop = (e, d) => {
    setDimensions((prev) => ({ ...prev, x: d.x, y: d.y }));
  };

  return (
    <div onClick={() => {}}>
      <Rnd
        position={{ x: dimensions.x, y: dimensions.y }}
        onDragStop={handleDragStop}
        enableResizing={false}
        style={{
          cursor: 'default',
        }}
      >
        {children}
      </Rnd>
    </div>
  );
};

export default Drag;
