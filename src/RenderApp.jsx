import { useAppContext } from './AppContext';
import Drag from './components/Drag';
import Animated from './components/Animated';
import { appComponents } from './components/AppComponents';

const RenderApp = () => {
  const { activeApps, openApp } = useAppContext();

  return (
    <div>
      {activeApps.map(
        (app) =>
          appComponents[app] && (
            <div
              key={app}
              onClick={() => {
                openApp(app);
              }}
            >
              <Animated isActive={true}>
                <Drag>{appComponents[app]}</Drag>
              </Animated>
            </div>
          )
      )}
    </div>
  );
};
export default RenderApp;
