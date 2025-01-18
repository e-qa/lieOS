import { MdClose } from 'react-icons/md';
import { useAppContext } from '../AppContext';
import PropTypes from 'prop-types';
const Close = ({ name }) => {
  const { closeApp } = useAppContext();
  return (
    <div className="bg-[#e4dbee] w-full h-10 p-3 flex justify-end border-b border-cyan-50 items-center shadow-inner">
      <button
        className="bg-red-900 text-white"
        onClick={() => {
          closeApp(name);
        }}
      >
        <MdClose size={30} />
      </button>
    </div>
  );
};

Close.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Close;
