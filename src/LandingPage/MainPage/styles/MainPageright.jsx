import React from "react";
import "./LandingPage.css";
const MainPageright = ({ Listt }) => {
  return (
    <>
      {Listt.map((ListMain) => (
        <div className="Message_9">
          <div className="Message_8">
            <img className="Image18" src={ListMain[0]} alt="" />
            <div className="Message_8div">
              <p>{ListMain[1]}</p>
              <p>{ListMain[2]}</p>
            </div>
            <p className="teses">{ListMain[3]}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainPageright;
