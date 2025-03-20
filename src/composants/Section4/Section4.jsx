import React from "react";
import "./Section4.css";
import Im10 from "../../assets/page1//im (10).jpg";
import Im11 from "../../assets/page1//im (11).jpg";

function Section4() {
  return (
    <>
      <div className="Section4  mt-4">
        <div className="Navsect4 d-flex  justify-content-around align-items-center mt-4" style={{
          gap: "4cm"
        }}>
          <div className="d-flex">
            <button
              className=" d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "white",
                width: "4cm",
                height: "1cm",
                borderRadius: "66px",
              }}
            >
              Testimonial
            </button>
            <button
              className=" d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "black",
                color:"white",
                fontSize :"12px",
                width: "4cm",
                height: "1cm",
                borderRadius: "66px",
              }}
            >
              What they say about us
            </button>
          </div>

          
                  <div className="d-flex" style={{gap:"1px"}}>
                <button style={{
                  height: "1cm",
                  width: "1cm"
                }}  className="rounded-circle"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
               </button>

                <button style={{
                  height: "1cm",
                  width: "1cm"
                }}  className="rounded-circle"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
               </button>
              </div>

          <div>
            <h1 >Our customer-satistaction</h1>
            <div className="logo"></div>
          </div>
        </div>

        <div className="BodySect4 d-flex justify-content-evenly align-items-center mt-4" style={{gap:"0.7cm"}}>
          <div>
            <img
              src={Im10}
              alt=""
              style={{
                width: "8cm",
                height: "8cm",
              }}
            />
          </div>

          <div>
            <p>
              I've been a member at Louvre for over a year now , and it's hands
              down the best sports center i've ever been to!
            </p>
          </div>

          <div>
            <img
              src={Im11}
              alt=""
              style={{
                width: "7cm",
                height: "5cm",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
