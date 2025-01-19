import { useState } from 'react';
import { Rnd } from 'react-rnd';
import PropTypes from 'prop-types';

const Drag = ({ children, x = 250, y = 50 }) => {
  const [dimensions, setDimensions] = useState({
    x: x,
    y: y,
  });

  const handleDragStop = (e, d) => {
    setDimensions((prev) => ({ ...prev, x: d.x, y: d.y }));
  };

  return (
    <div>
      <Rnd
        position={{ x: dimensions.x, y: dimensions.y }}
        onDragStop={handleDragStop}
        dragHandleClassName="drag-handle"
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

Drag.propTypes = {
  children: PropTypes.node.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Drag;
