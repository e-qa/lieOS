import folderIcon from '/images/folder.svg';

const Folders = () => {
  const folders = ['Documents', 'Downloads', 'Music', 'Videos'];
  return (
    <div className="p-4">
      {folders.map((folder, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 border-b border-gray-300"
        >
          <img src={folderIcon} alt="📁" className="w-8" /> {folder}
        </div>
      ))}
    </div>
  );
};

export default Folders;
