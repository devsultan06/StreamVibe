/* eslint-disable react/prop-types */

export default function NotificationSystem({ displayUsername }) {
  return (
    <div>
      <div className="notification-box bg-white rounded-lg p-3 shadow-md">
        <h5 className="text-lg font-bold mb-2">
          Congratulations, {displayUsername}!
        </h5>
        <ul>
          <li style={{ marginBottom: "20px" }}>
            We are thrilled to have you as a new member of our community. By
            signing up, you&apos;ve unlocked access to a world of exclusive content,
            personalized recommendations, and much more. Welcome aboard! As a
            token of our appreciation, we&apos;ve added some special features to your
            account. Don&apos;t forget to explore your settings to customize your
            experience. If you have any questions or need assistance, our
            support team is here to help you 24/7. Enjoy your journey with us!
          </li>
          <hr />
          <h5 className="text-lg font-bold mb-2" style={{ marginTop: "20px" }}>
            Upcoming changes to StreamVibe pricing in 2024
          </h5>
          <li className="text-lg">
            Check out the <a href="">new pricing updates</a>.
          </li>
        </ul>
      </div>
    </div>
  );
}
