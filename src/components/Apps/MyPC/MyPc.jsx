import { useState } from 'react';
import Close from '../../Close';
import SideBar from './SideBar';
import Desktop from './Desktop';
import MyPcContent from './MyPcContent';

function MyPC() {
  const [openContent, setOpenContent] = useState('MY PC');

  const handleOpen = (content) => {
    setOpenContent(content);
  };

  return (
    <div className=" w-[50rem] h-96 bg-gray-200 font-perfect-dos">
      <Close name="My PC" />
      <div className="flex h-[21.5rem]">
        <div className="basis-1/5 border-r-2  border-r-cyan-50 overflow-y-auto">
          <SideBar handleOpen={handleOpen} openContent={openContent} />
        </div>
        <div className="basis-4/5">
          <div className="content">
            {openContent === 'MY PC' && (
              <MyPcContent setOpenContent={setOpenContent} />
            )}
            {openContent === 'Desktop' && <Desktop />}
            {openContent === 'Pictures' && <p>Pictures</p>}
            {openContent === 'Folders' && <p>Folders</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPC;
