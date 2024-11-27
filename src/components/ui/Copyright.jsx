import { useState, useEffect } from "react";
const Copyright = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Update the year every time the component mounts
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div>
      <p className="text-[#999999]">Copyright &copy; {currentYear} DevSultan</p>
    </div>
  );
};

export default Copyright;
