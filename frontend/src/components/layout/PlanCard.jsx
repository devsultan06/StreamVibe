/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const PlanCard = ({
  id,
  title,
  description,
  price,
  button1Text,
  button2Text,
  onPayClick,
  type,
}) => {
  return (
    <div
      className="rounded-[10px] bg-black15 p-[20px]"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="4000"
    >
      <h2 className="text-[20px]">{title}</h2>
      <p className="mb-[20px] mt-[5px] text-[#999999]">{description}</p>
      <div className="mb-[20px] flex items-end">
        <h3 className="text-[25px] font-extrabold">${price}</h3>
        <span className="text-grey60">
          {type === "monthly" ? "/month" : "/yearly"}
        </span>
      </div>
      <div className="mb-2.5 mt-2.5 flex items-center gap-2.5">
        <button className="rounded-lg border-0 bg-[#0f0f0f] px-2.5 py-2.5 text-white outline-none transition-all duration-300 hover:bg-red45">
          {button1Text}
        </button>
        <button
          className="rounded-lg border-0 bg-red45 px-2.5 py-2.5 text-white outline-none transition-all duration-300 hover:bg-[#0f0f0f]"
          onClick={() => onPayClick(id)}
        >
          {button2Text}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
