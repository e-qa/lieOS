import Drag from './Drag';
import data from '../data.json';
import { useAppContext } from '../AppContext';

const AllApps = () => {
  const { openApp } = useAppContext();
  return (
    <div>
      {data.map((app) => (
        <Drag x={app.x} y={app.y} key={app.id}>
          <div
            className="-z-20 hover:bg-slate-400 flex flex-col items-center p-2"
            onDoubleClick={() => {
              openApp(app.name);
            }}
          >
            <img src={app.img} className="w-14" />
            <h3 className="text-center text-base break-words w-20 font-perfect-dos text-white text-stroke">
              {app.name}
            </h3>
          </div>
        </Drag>
      ))}
    </div>
  );
};

export default AllApps;
