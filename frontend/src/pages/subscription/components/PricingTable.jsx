/* eslint-disable react/no-unescaped-entities */
import plansTable from "../../../data/plansTable";

const PricingTable = () => {
  return (
    <div className="pricing-table-container">
      <div className="explore-head" data-aos="fade-right">
        <h1 className="text-xl">
          Compare our plans and find the right one for you
        </h1>
        <p className="explore-para text-grey60">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </p>
      </div>
      <table className="pricing-table" data-aos="fade-right">
        <thead>
          <tr>
            <th>Features</th>
            {plansTable.map((plan, index) => (
              <th key={index}>
                {plan.name}{" "}
                {plan.name === "Standard" && (
                  <span className="popular-tag">Popular</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.price}</td>
            ))}
          </tr>
          <tr>
            <td>Content</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.content}</td>
            ))}
          </tr>
          <tr>
            <td>Devices</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.devices}</td>
            ))}
          </tr>
          <tr>
            <td>Free Trial</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.freeTrial}</td>
            ))}
          </tr>
          <tr>
            <td>Cancel Anytime</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.cancelAnytime}</td>
            ))}
          </tr>
          <tr>
            <td>HDR</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.hdr}</td>
            ))}
          </tr>
          <tr>
            <td>Dolby Atmos</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.dolbyAtmos}</td>
            ))}
          </tr>
          <tr>
            <td>Ad-Free</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.adFree}</td>
            ))}
          </tr>
          <tr>
            <td>Offline Viewing</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.offlineViewing}</td>
            ))}
          </tr>
          <tr>
            <td>Family Sharing</td>
            {plansTable.map((plan, index) => (
              <td key={index}>{plan.familySharing}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
