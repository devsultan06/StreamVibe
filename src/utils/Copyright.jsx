import { useState, useEffect } from "react";
const Copyright = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Update the year every time the component mounts
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div>
      <p className="copyright">Copyright &copy; {currentYear} DevSultan</p>
    </div>
  );
};

export default Copyright;
