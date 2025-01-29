const Pictures = () => {
  const images = [
    '🖼️',
    '🖼️',
    '🖼️',
    '🖼️',
    '🖼️',
    '🖼️',
    '🖼️',
    '🖼️',
    '🖼️',
    '🖼️',
    '🖼️',
    '🖼️',
  ];
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="w-16 h-16 bg-gray-300 flex items-center justify-center border border-gray-500"
        >
          {img}
        </div>
      ))}
    </div>
  );
};

export default Pictures;
