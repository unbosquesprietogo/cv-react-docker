import bannerBg from "../assets/img/bannerbg.webp";
import React, { useRef } from "react";
import LiveTicker from "./ParallaxText";
import { experienceData} from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { ToastContainer} from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const experiencelider: React.FC = () => {
  const { ref } = useSectionInView("Experience");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (
    <React.Fragment>
      <section
        className=" skill-banner relative overflow-x-clip h-100% w-full flex flex-col gap-2 "
        id="experience"
        ref={ref}
      >
        <ToastContainer
          className="w-max text-3xl block p-3 "
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100 "
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-[--orange]">&lt;</span>
                {language === "ES" ? "Experiencia" : "experience"}
                <span className="text-[--orange]">/&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">
                {language === "ES" ? "Mi experiencia" : "My experience"}
              </h2>
            </motion.div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className=" w-[70vw] max-lg:hidden min-[1921px]:px-96"
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {experienceData.map((experience, index: number) => (
                <SwiperSlide
                  key={index}
                  className="quote-outer-container bg-[--darkblue] text-[--white] flex flex-row justify-between  rounded-2xl p-20 text-left max-lg:hidden "
                >
                  <div className=" w-[75%] flex flex-col gap-12 justify-between ">
                    <h2>{language === "ES"
                        ?experience.title
                        :experience.title_EN}</h2>
                  <h3>{language === "ES"
                        ?experience.job
                        :experience.job_EN}</h3>
                    <p className="text-white">
                      {language === "ES"
                        ? experience.description
                        : experience.description_EN}
                    </p>
                    <div className="technologies">
                      <h3>
                        {language === "ES" ? "Habilidades" : "Skills"}
                      </h3>
                      <div className="grid grid-cols-5 gap-10 p-4">
                        {experience.technologies.map(
                          (technology, innerIndex: number) => (
                          <div style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                            <img
                              key={innerIndex}
                              src={technology.icon}
                              alt={`${language === "ES"
                              ?experience.title
                              :experience.title_EN}-icon`}
                              className="h-[5rem] "
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={technology.name}
                            />
                            <p className="text-white ">
                            {technology.name}
                            </p>
                          </div>  
                          )
                        )}
                      </div>
                    </div>

                  </div>
                  
                  <div style={{flexDirection:"column"}} className="image-container flex flex-column justify-center items-center">
                    <div style={{ width: "25vh", height: "25vh", overflow: "hidden" }}>
                      <motion.img
                        src={experience.image}
                        alt="Logo 1"
                        className="logo"
                        whileHover={{ scale: 1.1, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                        initial={{ scale: 1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                        style={{ width: "100%",  borderRadius: "10px", objectFit: "cover", objectPosition: "center center" }}
                      />
                    </div>

                    <br />

                    <div style={{ width: "25vh", height: "25vh", overflow: "hidden" }}>
                      <motion.img
                        src={experience.image2}
                        alt="Logo 2"
                        className="logo"
                        whileHover={{ scale: 1.1, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                        initial={{ scale: 1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                        style={{ width: "100%",  borderRadius: "10px", objectFit: "cover", objectPosition: "center center" }}
                      />
                    </div>
                  </div>
                   
                  
                </SwiperSlide>
              ))}
            </Swiper>
            {experienceData.map((experience, index: number) => (
              <article
                key={index}
                className="bg-darkblue flex flex-col gap-10 w-[80%] h-full  border-lightblue border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
              >
                <h2 className="text-white gap-30">{language === "ES"
                        ?experience.title
                        :experience.title_EN}</h2>
                 <div style={{flexDirection:"row", justifyContent:"space-between"}} className="image-container flex flex-column justify-center items-center">
                    <div style={{ width: "15vh", height: "15vh", overflow: "hidden" }}>
                      <motion.img
                        src={experience.image}
                        alt="Logo 1"
                        className="logo"
                        whileHover={{ scale: 1.1, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                        initial={{ scale: 1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                        style={{ width: "100%",  borderRadius: "10px", objectFit: "cover", objectPosition: "center center" }}
                      />
                    </div>


                    <div style={{ width: "15vh", height: "15vh", overflow: "hidden" }}>
                      <motion.img
                        src={experience.image2}
                        alt="Logo 2"
                        className="logo"
                        whileHover={{ scale: 1.1, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                        initial={{ scale: 1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                        style={{ width: "100%",  borderRadius: "10px", objectFit: "cover", objectPosition: "center center" }}
                      />
                    </div>
                  </div>
                  <h2 className="text-white gap-30">{language === "ES"
                        ?experience.job
                        :experience.job_EN}</h2>
                  
                <p className="text-white  max-lg:text-4xl">
                  {language === "ES"
                    ? experience.description
                    : experience.description_EN}
                </p>
                
                <div className="technologies">
                  <h3 className="text-white">
                    {language === "ES" ? "Habilidades" : "Skills"}
                  </h3>
                  <div className="grid grid-cols-3 gap-10 p-4">
                    {experience.technologies.map(
                      (technology, innerIndex: number) => (
                      <div style={{display:"flex", flexDirection:"column", textAlign:"center"}}>
                        <img
                          key={innerIndex}
                          src={technology.icon}
                          alt={`${language === "ES"
                          ?experience.title
                          :experience.title_EN}-icon`}
                          className="h-[5rem]"
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={technology.name}
                          style={{marginBottom:"9px"}}
                        />
                        <h3 className="text-white max-lg:text-[1.3rem] ">
                         {technology.name}
                        </h3>
                      </div>
                      )
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <LiveTicker />
      </section>
      <ReactTooltip
        place="top"
        id="my-tooltip"
        style={{
          fontSize: "1.5rem",
          backgroundColor: "var(--orange)",
        }}
      />
    </React.Fragment>
  );
};

export default experiencelider;
