/* eslint-disable react/no-unescaped-entities */
import Device from "./Device";
import devices from "../../../data/devices";
const Devices = () => {
  return (
    <div className="bg-black10 px-[70px] pb-[100px] text-white max-590:px-[10px] max-860:px-[20px]">
      <div >
        <h1 className="text-xl">
          We Provide you streaming experience across various devices.
        </h1>
        <p className="text-grey60">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices.
        </p>
      </div>
      <div className="max-990::grid-cols-2 mt-[60px] grid grid-cols-3 gap-8 max-600:grid-cols-1 max-1075:mt-[60px] max-1075:gap-2">
        {devices.map((device) => (
          <Device key={device.deviceName} {...device} />
        ))}
      </div>
    </div>
  );
};

export default Devices;
