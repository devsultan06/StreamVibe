import Form from "./components/Form";
/* eslint-disable react/no-unescaped-entities */

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
