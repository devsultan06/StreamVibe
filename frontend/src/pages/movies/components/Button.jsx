const Button = ({ children, onClick }) => {
  return (
    <button
      className="plus mt-[3px] flex w-[40px] cursor-pointer items-center justify-center rounded-[5px] border-none bg-black10 p-[8px] outline-none transition duration-300 ease-in hover:bg-red45 max-600:mt-[15px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
