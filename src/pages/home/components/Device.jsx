/* eslint-disable react/prop-types */
const Device = ({ image, deviceName, paragraphText }) => {
  return (
    <div
      className="device"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="4000"
    >
      <div className="flex items-center gap-4">
        <img src={image} alt="" className="w-[50px]" />
        <h1 className="text-[20px]">{deviceName}</h1>
      </div>
      <p className="mt-5 italic">{paragraphText}</p>
    </div>
  );
};

export default Device;
