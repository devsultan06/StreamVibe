/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import plans from "../../JS/plans";
import PlanCard from "./PlanCard";
import Year from "./Year";
import yearPlans from "../../JS/yearPlans";

const Pricing = ({ onPayClick }) => {
  const [planType, setPlanType] = useState("monthly");

  const showYearlyPlans = () => {
    setPlanType("yearly");
  };

  const showMonthlyPlans = () => {
    setPlanType("monthly");
  };

  return (
    <div className="faq bg-black10 text-white">
      <div className="faq-header">
        <div className="explore-head" data-aos="fade-right">
          <h1 className="text-xl">Choose the plan that's right for you</h1>
          <p className="explore-para text-grey60">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit yr preference.
          </p>
        </div>

        <div className="plan-button" data-aos="fade-right">
          <button className="font-semibold monthly" onClick={showMonthlyPlans}>
            Monthly
          </button>
          <button className="font-semibold yearly" onClick={showYearlyPlans}>
            Yearly
          </button>
        </div>
      </div>
      <div className="plans">
        {planType === "monthly"
          ? plans.map((device) => (
              <PlanCard
                key={device.price}
                {...device}
                onPayClick={onPayClick}
              />
            ))
          : yearPlans.map((device) => (
              <Year key={device.price} {...device} onPayClick={onPayClick} />
            ))}
      </div>
    </div>
  );
};

export default Pricing;
