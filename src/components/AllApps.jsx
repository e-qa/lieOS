import Drag from './Drag';
import { useState } from 'react';
import Calculator from './Apps/Calculator';
import Animated from './Animated';
import data from '../data.json';

const AllApps = () => {
  const [first, setfirst] = useState(false);

  return (
    <div>
      {data.map((app) => {
        return (
          <Drag x={app.x} y={app.y} key={app.id}>
            <div
              className="-z-20 hover:bg-slate-400 flex flex-col items-center  p-2 "
              onDoubleClick={() => {
                setfirst(!first);
              }}
            >
              <img src={app.img} className="w-14" />
              <h3 className="text-center text-base break-words w-20 font-perfect-dos text-white text-stroke">
                {app.name}
              </h3>
            </div>
          </Drag>
        );
      })}
      <Animated isActive={first}>
        <Drag>
          <Calculator />
        </Drag>
      </Animated>
    </div>
  );
};

export default AllApps;
