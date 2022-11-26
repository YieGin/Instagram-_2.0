import React from "react";
import LeftPage from "../LeftPage/LeftPage";
import "./Messages.css";
import Image18 from "../../Images/18.jpg";
import Image19 from "../../Images/19.jpg";
import Image20 from "../../Images/20.jpg";
import Image21 from "../../Images/21.jpg";
import Image22 from "../../Images/22.jpg";
import Image23 from "../../Images/23.jpg";
import Image24 from "../../Images/24.jpg";
import Image25 from "../../Images/25.jpg";
import Image26 from "../../Images/26.jpg";
import Image27 from "../../Images/27.jpg";
import Image28 from "../../Images/28.jpg";
import Image29 from "../../Images/29.jpg";
import Image30 from "../../Images/30.jpg";
import Image31 from "../../Images/31.jpg";

import { useState } from "react";
import List from "./List";
const Messages = () => {
  const [Right, setRight] = useState(true);
  const [Right2, setRight2] = useState(false);
  const [Right3, setRight3] = useState(false);
  const [Right4, setRight4] = useState(false);
  const [Right5, setRight5] = useState(false);
  const [Right6, setRight6] = useState(false);
  const [Right7, setRight7] = useState(false);
  const [Right8, setRight8] = useState(false);
  const [Right9, setRight9] = useState(false);
  const [Right10, setRight10] = useState(false);
  const [Right11, setRight11] = useState(false);
  const [Right12, setRight12] = useState(false);
  const [Right13, setRight13] = useState(false);
  const [Right14, setRight14] = useState(false);
  const Sending2 = [[Image31, "imad temiene"]];
  const Sending3 = [[Image19, "Sonari"]];
  const Sending4 = [[Image20, "Mahrez"]];
  const Sending5 = [[Image21, "Moaa"]];
  const Sending6 = [[Image22, "Cherif Betchim"]];
  const Sending7 = [[Image23, "Nicola Carreta"]];
  const Sending8 = [[Image24, "Alaa Din"]];
  const Sending9 = [[Image25, "Ahmed Bu"]];
  const Sending10 = [[Image26, "Matouane"]];
  const Sending11 = [[Image27, "Coiffeur"]];
  const Sending12 = [[Image28, "MOA JONSSON"]];
  const Sending13 = [[Image29, "☆♡"]];
  const Sending14 = [[Image30, "TçHî Köu"]];
  return (
    <div className="LandingPage_Main">
      <LeftPage />
      <div className="Message-Main">
        <div className="Message_2nd">
          <div className="Message_3rd">
            <div className="Message_4rd">
              <p>belamri_yie</p>
              <svg
                className="Dropdown-Message"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
                ></path>
              </svg>
              <svg
                className="svgMessages"
                aria-label="New message"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="16.848"
                  x2="20.076"
                  y1="3.924"
                  y2="7.153"
                ></line>
              </svg>
            </div>
            <div className="Message_5">
              <div
                onClick={() => {
                  setRight(false);
                  setRight3(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight2(true);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image31} alt="" />
                <div className="Message_6div">
                  <p>imad temiene</p>
                  <p>Send you a message. 1w</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(true);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image19} alt="" />
                <div className="Message_6div">
                  <p>Sonari</p>
                  <p>Send you a message . 1w</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(true);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image20} alt="" />
                <div className="Message_6div">
                  <p>Mahrez</p>
                  <p>Send you a message . 1w</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(true);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image21} alt="" />
                <div className="Message_6div">
                  <p>Moaa</p>
                  <p>Active 6h ago</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(true);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image22} alt="" />
                <div className="Message_6div">
                  <p>Cherif Betchim</p>
                  <p>Active yesterday</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(true);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image23} alt="" />
                <div className="Message_6div">
                  <p>Nicola Carreta</p>
                  <p>AHAHAHAHA</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(true);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image24} alt="" />
                <div className="Message_6div">
                  <p>Alaa Din</p>
                  <p>Active now</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(true);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image25} alt="" />
                <div className="Message_6div">
                  <p>Ahmed Bu</p>
                  <p>Active 3h ago</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(true);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image26} alt="" />
                <div className="Message_6div">
                  <p>Matouane</p>
                  <p>Active 5h ago</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(true);
                  setRight12(false);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image27} alt="" />
                <div className="Message_6div">
                  <p>Coiffeur</p>
                  <p>Ok . 1w</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(true);
                  setRight13(false);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image28} alt="" />
                <div className="Message_6div">
                  <p>MOA JONSSON</p>
                  <p>Active yesterday</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(true);
                  setRight14(false);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image29} alt="" />
                <div className="Message_6div">
                  <p>☆♡</p>
                  <p>Active now</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setRight2(false);
                  setRight4(false);
                  setRight5(false);
                  setRight6(false);
                  setRight7(false);
                  setRight8(false);
                  setRight9(false);
                  setRight10(false);
                  setRight11(false);
                  setRight12(false);
                  setRight13(false);
                  setRight14(true);
                  setRight(false);
                  setRight3(false);
                }}
                className="Message_6"
              >
                <img className="Image18" src={Image30} alt="" />
                <div className="Message_6div">
                  <p>TçHî Köu</p>
                  <p>Active yesterday</p>
                </div>
              </div>
            </div>
          </div>
          {Right && (
            <div className="Right-Message">
              <svg
                aria-label="Direct"
                class="_ab6-"
                color="#262626"
                fill="#262626"
                height="96"
                role="img"
                viewBox="0 0 96 96"
                width="96"
              >
                <circle
                  cx="48"
                  cy="48"
                  fill="none"
                  r="47"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="69.286"
                  x2="41.447"
                  y1="33.21"
                  y2="48.804"
                ></line>
                <polygon
                  fill="none"
                  points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
              <>
                <p className="you_message">Your Messages</p>
                <p className="Private">
                  Send private photos and messages to a friend or group.
                </p>
                <div className="Send">Send Message</div>
              </>
            </div>
          )}
          {Right2 && <List List={Sending2} />}
          {Right3 && <List List={Sending3} />}
          {Right4 && <List List={Sending4} />}
          {Right5 && <List List={Sending5} />}
          {Right6 && <List List={Sending6} />}
          {Right7 && <List List={Sending7} />}
          {Right8 && <List List={Sending8} />}
          {Right9 && <List List={Sending9} />}
          {Right10 && <List List={Sending10} />}
          {Right11 && <List List={Sending11} />}
          {Right12 && <List List={Sending12} />}
          {Right13 && <List List={Sending13} />}
          {Right14 && <List List={Sending14} />}
        </div>
      </div>
    </div>
  );
};

export default Messages;
