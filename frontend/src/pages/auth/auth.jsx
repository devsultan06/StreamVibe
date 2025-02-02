import Form from "./components/Form";
/* eslint-disable react/no-unescaped-entities */

const BASE_URL = "http://localhost:5000";

fetch(`${BASE_URL}/movies`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error fetching movies:", err));

const Authentication = () => {
  return (
    <div
      className="authentication flex h-screen w-full items-center justify-center bg-[#1a1a1a] bg-cover bg-center text-white"
      style={{
        backgroundImage: 'url("/images/StreamVibe-Home-Background.png")',
      }}
    >
      <Form />
    </div>
  );
};

export default Authentication;
