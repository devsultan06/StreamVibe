import { useState } from "react";
import { motion } from "framer-motion";
import faqData from "../../data/faq";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-black10 px-[70px] pb-24 text-white max-590:px-2.5 max-590:pb-24 max-860:px-5 max-860:pb-24">
      <div className="flex justify-between max-800:block">
        <div data-aos="fade-right">
          <h1 className="text-xl">Frequently Asked Questions</h1>
          <p className="text-grey60">
            Got questions? We&apos;ve got answers! Check out our FAQ section to
            find answers.
          </p>
        </div>

        <div className="question-button" data-aos="fade-right">
          <button className="mt-[20px] rounded-[5px] bg-red45 p-[10px] font-bold hover:bg-[#b11a1a]">
            Ask a Question
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-8 max-800:grid-cols-1">
        {faqData.map((faq, index) => (
          <div
            className="cursor-pointer rounded-lg border-b border-red45 p-5 transition duration-100 ease-in-out"
            key={index}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="4000"
          >
            <div className="flex cursor-pointer items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <img src={faq.image} alt="" className="w-10" />
                <h1>{faq.question}</h1>
              </div>
              <button
                className="border-0 outline-none"
                onClick={() => toggleAnswer(index)}
              >
                {activeIndex === index ? (
                  <img src="/images/minus.png" alt="Collapse" className="w-5" />
                ) : (
                  <img src="/images/plus.png" alt="Expand" className="w-5" />
                )}
              </button>
            </div>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-grey60">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
