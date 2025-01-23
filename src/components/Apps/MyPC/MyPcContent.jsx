import dvd from '/images/dvd.svg';
import disk from '/images/harddisk.svg';
import folder from '/images/folder.svg';

let fakeData = [
  { id: 0, name: '3D Objects' },
  { id: 1, name: 'Desktop' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Documents' },
  { id: 4, name: 'Downloads' },
  { id: 5, name: 'Pictures' },
  { id: 6, name: 'Videos' },
];

const MyPcContent = () => {
  return (
    <div className="flex flex-col mt-2">
      <ul className="flex flex-wrap gap-10 ml-3 mt-3">
        {fakeData.map((li) => {
          return (
            <li key={li.id}>
              <div className="text-center">
                <img src={folder} alt="" className="w-20" />
                <span>{li.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-16 border-2 border-t-cyan-50"></div>
      <div className="flex ml-3">
        <div className="flex border border-1 hover:bg-slate-50 w-60">
          <img src={disk} alt="DVD icon" className="w-12" />
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-xl">Local Disk(C:)</p>
            <span className="text-sm">80 GB free of 512GB</span>
          </div>
        </div>
        <div className="flex   border border-1 hover:bg-slate-50 w-60">
          <img src={dvd} alt="DVD icon" className="w-12" />
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-xl">DVD Drive(D:)</p>
            <span className="text-sm">108 GB free of 120GB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPcContent;
