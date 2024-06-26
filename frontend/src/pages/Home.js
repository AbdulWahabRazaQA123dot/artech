import React, { useEffect } from "react";
import Details from "../components/Common/Details";
import HeroSection from "../components/HomeComponents/HeroSection";
import ServicesSec from "../components/Common/ServicesSec";
import DeliveredSec from "../components/HomeComponents/DeliveredSec";
import HugeSec from "../components/HomeComponents/HugeSec";
import IndustriesCard from "../components/Common/IndustriesCard";
import Testimonial from "../components/Common/Testimonial";
import LetsTalk from "../components/HomeComponents/LetsTalk";
import ContactUs from "../components/Common/ContactUs";
import banking from "../assets/banking.png";
import blockchain from "../assets/blockchain.png";
import ai from "../assets/ai.png";
import datasci from "../assets/datasci.png";
import devops from "../assets/devops.png";
import iot from "../assets/iot.png";
import ecommerce from "../assets/ecommerce.png";
import technical from "../assets/technical.png";
import hospital from "../assets/hospital.png";
import binance from "../assets/binance.png";
import { Wrapper } from "../components/Layouts";
import { H2 } from "../components/Typography";
import { useNavigate } from "react-router-dom";
const IndustryData = [
  { src: banking, title: "POS Softwares" },

  { src: binance, title: "Markets" },
  {
    src: hospital,
    title: "Education",
  },
  { src: technical, title: "Manufacturing" },

  { src: hospital, title: "Healthcare" },

  // { src: banking, title: "Banking" },
];

const ServiceCardsData = [
  {
    src: blockchain,
    title: "Digital Marketing",
    desc: "Empower your digital marketing efforts with innovative strategies: Elevate brand visibility, engagement, and conversions for unparalleled success.",
  },
  {
    src: ai,
    title: "AI & Data Science",
    desc: "Utilize advanced artificial intelligence algorithms and machine learning models to extract valuable insights.",
  },
  {
    src: devops,
    title: "DevOps",
    desc: "Streamline software development and deployment processes, ensuring efficient collaboration, accelerated delivery, and superior outcomes.",
  },
  {
    src: datasci,
    title: "Shopify & WordPress",
    desc: "Leverage advanced analytics techniques to derive valuable insights, empowering strategic decision-making and fostering business expansion on Shopify and WordPress platforms.",
  },
  {
    src: ecommerce,
    title: "E-Commerce",
    desc: "Build engaging user-friendly online stores for seamless digital shopping experiences and accelerated business growth.",
  },
  {
    src: iot,
    title: "App Development",
    desc: "Facilitate seamless connectivity and control within your app, optimizing operations and enhancing user experiences.",
  },
];

const Home = () => {
  const history = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  return (
    <>
      <HeroSection />
      <Details  page="home" btnName="Initiate Consultation" />
      <ServicesSec data={ServiceCardsData} heading={true} page="home" />
      <DeliveredSec />
      <HugeSec />
      <Wrapper bg="black">
        <Wrapper className="container" data-aos="fade-down">
          <Wrapper
            color="#fff"
            ls="1px"
            weight="600"
            pt="3rem"
            className="fs-5 "
            size="24px"
          >
            Industries we serves
          </Wrapper>
          <H2 ls="2px" weight="600" className="text-white" size="31px">
            Developing Customized IT Softwares for your Industry
          </H2>
        </Wrapper>
        <IndustriesCard data={IndustryData} />
      </Wrapper>
      {/* <Testimonial /> */}
      <LetsTalk />
      <ContactUs />
    </>
  );
};

export default Home;
