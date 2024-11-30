import React from "react";
import styles from "../style";
import { extraCurricular } from "../constants";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const Content = ({ text, link }) => {
  return (
    <div>
      <p className="font-poppins font-normal text-[14px] text-dimWhite my-4 leading-[32px]">
        {/* {●} */}
        {text}{" "}
        {link ? (
          <a href={link} target="_blank">
            <BsLink45Deg
              size="1rem"
              className="inline hover:text-teal-200"
            ></BsLink45Deg>
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const ExtraCurricularCard = (props) => {
  return (
    <motion.div
      className="flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
      whileInView={{ y: [-30, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row">
        <img
          src={props.logo}
          alt={props.organisation}
          className="w-[100%] h-[100%] rounded-full"
        />
        <div className="flex flex-col ml-4"></div>
      </div>

      <div>
        {props.content.map((info, index) => {
          return <Content key={index} {...info} />;
        })}
      </div>

      <div className="text-center font-poppins font-normal text-[14px] text-dimWhite my-4 leading-[32px]">
        <strong>{props?.name} </strong>- {props.designation}
        {/* {props.currentCompany} */}
      </div>
    </motion.div>
  );
};

const ExtraCurricular = (props) => {
  if (props.enabled !== true) return null;
  return (
    <section id="extraCurricular">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Testimonials
      </h1>

      <div className={`${styles.flexCenter} flex-col relative mb-4 mt-8`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-3">
          {extraCurricular.map((card) => (
            <ExtraCurricularCard key={card.id} index={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
