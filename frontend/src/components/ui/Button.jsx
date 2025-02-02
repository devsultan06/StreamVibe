/* eslint-disable react/prop-types */
export const Button = ({ handleClick, children }) => {
  return (
    <button
      className="active:bg-red-500 visited:bg-red-500 rounded-[5px] p-[10px] font-semibold transition-all duration-300 ease-in-out hover:bg-[#1a1a1a] focus:bg-[#1a1a1a]"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};


