import sidebar from './sidebar.json';
const SideBar = ({ handleOpen, openContent }) => {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {sidebar.map((li) => {
          return (
            <li
              key={li.id}
              onClick={() => {
                handleOpen(li.name);
              }}
              className={`px-1 hover:bg-slate-500 ${
                openContent === li.name ? 'bg-slate-500' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div>
                  <img src={li.img} alt={li.name} className="w-6" />
                </div>
                <b>{li.name}</b>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
