import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/LandingPage.css";
import LeftPage from "../LeftPage/LeftPage";
import Image1 from "../../Images/1.jpg";
import Image17 from "../../Images/17.jpg";
import Image19 from "../../Images/19.jpg";
import Image20 from "../../Images/20.jpg";
import Image21 from "../../Images/21.jpg";
import Image22 from "../../Images/22.jpg";
import Image23 from "../../Images/23.jpg";
import Image37 from "../../Images/37.jpg";
import Image38 from "../../Images/38.jpg";
import Image39 from "../../Images/39.jpg";
import Image40 from "../../Images/40.jpg";
import Image41 from "../../Images/41.jpg";
import Image42 from "../../Images/42.jpg";
import Image43 from "../../Images/43.jpg";
import Image44 from "../../Images/44.jpg";
import Image45 from "../../Images/45.jpg";
import Image46 from "../../Images/46.jpg";
import Image47 from "../../Images/47.jpg";
import Image48 from "../../Images/48.jpg";
import LandingPageList from "../LandingPageList/LandingPageList";
import MainPageright from "./styles/MainPageright";
import { useState } from "react";
const LandingPage = () => {
  const textScrollVariants = {
    visible: { opacity: 1, left: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  const [top, settop] = useState(false);
  const [top1, settop1] = useState(true);
  const List1 = [
    [
      Image37,
      "nariddyang",
      Image38,
      "nariddyang",
      " 오늘 타임테이블",
      " 11:00~11:30 (포토타임10분/가위바이보 이벤트)",
    ],
  ];
  const List2 = [[Image39, "lalalalisa_m", Image40, "lalalalisa_m", "", ""]];
  const List3 = [
    [
      Image39,
      "lalalalisa_m",
      Image41,
      "lalalalisa_m",
      " Newark! Always a joy coming back to this city💛 I felt so overwhelmed with your love. Thank you Blinks and hope to be",
      " back soon!💫",
    ],
  ];
  const List4 = [
    [
      Image42,
      "jennierubyjane",
      Image43,
      " jennierubyjane",
      " super cold but still eat ice cream 🍕🍦",
      "",
    ],
  ];
  const List5 = [
    [
      Image39,
      "jennierubyjane",
      Image44,
      "jennierubyjane",
      "and its none left on your shelf 🤍 ",
      "",
    ],
  ];
  const List_1 = [[Image1, "belamri_yie", "Belamri islame", "Switch"]];
  const List_2 = [[Image48, "netchq34bbq", "Followed by tipo", "Switch"]];
  const List_3 = [[Image45, "bahloula591", "Chaima Bahloula", "Switch"]];
  const List_4 = [[Image46, "x_reem", "New to Instagram", "Switch"]];
  const List_5 = [[Image47, "ramzi_our", "Suggested for you", "Switch"]];
  return (
    <div className="LandingPage_Main">
      <LeftPage />
      <div className="LandingPage-main-right">
        {top1 && (
          <motion.div
            ref={ref}
            variants={textScrollVariants}
            initial="hidden"
            className="Storyy"
            animate={controls}
          >
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image17} alt="" />
              <p>paulaeal</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image19} alt="" />
              <p>Mahrez</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image20} alt="" />
              <p>Katie</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image21} alt="" />
              <p>Cherif</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image23} alt="" />
              <p>Alaa</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image39} alt="" />
              <p>lalalalisa</p>
            </div>
            <svg
              onClick={() => {
                settop(true);
                settop1(false);
              }}
              className="dsqsd"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
              ></path>
            </svg>
          </motion.div>
        )}
        {top && (
          <motion.div
            ref={ref1}
            variants={textScrollVariants}
            initial="hidden"
            className="Story"
            animate={controls1}
          >
            <svg
              onClick={() => {
                settop(false);
                settop1(true);
              }}
              className="dsqsd"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"
              ></path>
            </svg>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image17} alt="" />
              <p>paulaeal</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image19} alt="" />
              <p>Mahrez</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image20} alt="" />
              <p>Katie</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image21} alt="" />
              <p>Cherif</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image22} alt="" />
              <p>Nicola</p>
            </div>
            <div className="Story-coulam">
              <img className="Imagestroy" src={Image39} alt="" />
              <p>lalalalisa</p>
            </div>
            <svg
              className="dsqsd"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
              ></path>
            </svg>
          </motion.div>
        )}
        <LandingPageList List={List5} />
        <LandingPageList List={List2} />
        <LandingPageList List={List3} />
        <LandingPageList List={List4} />
        <LandingPageList List={List1} />
      </div>
      <div className="Mainpagerightdiv">
        <MainPageright Listt={List_1} />
        <p>Suggestions For You</p>
        <MainPageright Listt={List_2} />
        <MainPageright Listt={List_3} />
        <MainPageright Listt={List_4} />
        <MainPageright Listt={List_5} />
      </div>
    </div>
  );
};

export default LandingPage;
