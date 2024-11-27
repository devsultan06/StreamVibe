/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import plans from "../../data/plans";
import PlanCard from "./PlanCard";
import yearPlans from "../../data/yearPlans";
import "./styles/layout.css";
import {Button} from "../ui/Button";
const Plan = ({ onPayClick }) => {
  const [planType, setPlanType] = useState("monthly");

  const showYearlyPlans = () => {
    setPlanType("yearly");
  };

  const showMonthlyPlans = () => {
    setPlanType("monthly");
  };

  return (
    <div className="bg-black10 px-[70px] pb-24 text-white max-590:px-2.5 max-590:pb-24 max-860:px-5 max-860:pb-24">
      <div className="flex justify-between max-800:block">
        <div data-aos="fade-right">
          <h1 className="text-xl">Choose the plan that's right for you</h1>
          <p className="text-grey60">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit yr preference.
          </p>
        </div>
        <div
          className="mt-[10px] flex w-[180px] items-center gap-4 rounded-[5px] bg-[#0f0f0f] p-2"
          data-aos="fade-right"
        >
          <Button text="Monthly" handleClick={showMonthlyPlans}>
            Monthly
          </Button>
          <Button text="Yearly" handleClick={showYearlyPlans}>
            Yearly
          </Button>
        </div>
      </div>
      <div className="plans mt-[60px] grid grid-cols-3 gap-[3rem] max-600:grid-cols-1 max-600:gap-[1rem] max-1075:mt-[60px] max-1075:grid-cols-2 max-1075:gap-[1rem]">
        {(planType === "monthly" ? plans : yearPlans).map((plan) => (
          <PlanCard
            key={plan.price}
            {...plan}
            onPayClick={onPayClick}
            type={planType}
          />
        ))}
      </div>
    </div>
  );
};

export default Plan;
