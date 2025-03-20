import React from "react";
import "./Section5.css";
import Im5 from "../../assets/page1//im (5).jpg";

function Section5() {
  return (
    <>
      <div className="Section5 d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <div>
            <img style={{
                height: "8cm",
                width: "8cm",
            }} src={Im5} alt="" />
          </div>

          <div className="d-flex flex-column align-items-start" style={{
                width: "30rem", position: "relative", top: "1cm", left: "1cm"
              
          }}>
            <div className="Navsect4 d-flex  justify-content-around align-items-center mt-4">
              <div className="d-flex">
                <button
                  className=" d-flex align-items-center justify-content-center"
                  style={{
                    background :"black",
                    borderColor : "white",
                    width: "4cm",
                    height: "1cm",
                    borderRadius: "66px",
                    color: "white",
                  }}
                >
                  Subscribe
                </button>
                <button
                  className=" d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "white",
                    width: "4cm",
                    height: "1cm",
                    borderRadius: "66px",
                    
                  }}
                >
                  Newsletter
                </button>
              </div>
            </div>
            <p>Get the Lastest Updates , Special Offers , and Exclusive Event Invitation!</p>
            <div className="btn d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  height: "1cm",
                  width: "7.0cm",
                  background: "white",
                  borderRadius: "66px",
                  borderColor: "white",
                  gap: "3.5cm",
                  border: "solid",
                }}
              >
                <input
                  type="text"
                  placeholder="recherche"
                  style={{ border: "none", width: "1.9cm", height: "0.7cm" }}
                />

                <div className="seachIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    style={{ height: "28px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Section5;
