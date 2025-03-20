import React from "react";
import Links from "../Links";
import Im2 from "../../assets/page1/bas.jpg";
import Im3 from "../../assets/page1/im (3).jpg";
import "./Section1.css";

function Section1() {
  return (
    <>
      <section
        className="section1"
        style={{ position: "relative", bottom: "10cm" }}
      >
        <div className=" QuerySection1 d-flex justify-content-evenly">
          <div
            className=""
            style={{
              width: "25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "1cm",
            }}
          >
            <button className="rounded-pill">About Louvre</button>

            <h3 className="mb-3">
              At Louvre sport center , we're passionate about provinding a
              top-notch environment for athletes of all levels
            </h3>

            <button
              type="button"
              class="btn btn-primary rounded-pill"
              style={{ width: "4cm" }}
            >
              <div className="    d-flex" style={{ gap: "12px" }}>
                <p style={{ position: "relative", top: "7px" }}>
                  {" "}
                  Get in touch
                </p>
                <svg
                  style={{ height: "20px", position: "relative", top: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div className="imgSect1" style={{ width: "25rem" }}>
            <img src={Im3} alt="" />
            <button
              className=" imgSect1Button rounded-pill">
              {" "}
              Outdoor
            </button>

            <div
              className=" DD  d-flex justify-content-around"
              
            >
              <p>
                Versatile space for a whide <br /> range of activities
              </p>
              <button
                className="btn btn-outline-primary rounded-circle "
                style={{ height: " 1cm", width: "1.2cm" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="" style={{ width: "19rem" }}>
            <img
              src={Im2}
              alt=""
              style={{
                height: "4.5cm",
                width: "8cm",
                position: "relative",
                borderRadius: "1cm",
                top: "3cm",


                
              }}
            />

              <button
              className="rounded-pill"
              style={{
                position: "relative",
                bottom: "0.9cm",
                left: "18px"
              }}
            >
              {" "}
              indoor
            </button>

            <h3 style={{
                  position: "relative",
                   fontSize: "revert",
                   top:" 43px",
                   width: "3cm",
                   left: "21px",
            }}> Futsal court  </h3> 


            <p style={{
              position: "relative",
               top: "80px",
               left: "21px",
                width: "9rem",
               fontSize: "11px"
            }}> Discover your new-favorite place to play, train and  complete</p>



<div className="d-flex" style={{gap:"1px" ,
                  position: "relative",
                  width: "2cm",
                  left: "6cm",
                  top: "22px"
}}>
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
              


          </div>
            
          </div>
       
        
      </section>
    </>
  );
}

export default Section1;
