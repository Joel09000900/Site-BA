import React from "react";
import "./Section2.css";
import Im2 from "../../assets/page1/im (2).jpg";
import Im3 from "../../assets/page1/im (3).jpg";
import Logo from "../../assets/page1/Logo.jpg";


function Section2() {
  return (
    <>
      <section
        className="section2"
        style={{ position: "relative", bottom: "8cm", marginBottom: "-7cm" , gap:"3cm" }}
      >
        <div className="d-flex  justify-content-center">
          <div style={{ width: "44%" }}>
            <div className="NavSect2 ">
              <div style={{  width: "1cm" , height: "1cm" }} className="rounded-circle">
                <img src={Logo} alt=""  style={{
                               height: "1cm",
                               width: "1cm",
                               position: "relative"
                }} />
              </div>

              <div className=" d-flex" style={{ gap: "0.5cm" }}>
                <button className="button rounded-pill">Competition</button>
                <button className="button rounded-pill">Training</button>
                <button className="button rounded-pill">Friendly match</button>
              </div>
            </div>
            <div className="CardSect2 ml-3">
              <div style={{  height: "100%" }}>
                <img
                  src={Im2}
                  alt=""
                  style={{ height: "7.5cm", width: "5.5cm" ,borderRadius: "1cm 0cm 0cm 1cm"}}
                />

              </div>

              <div className="d-flex align-items-center flex-column justify-content-center ml-2" style={{marginLeft:"18px"}}>
                <div>
                  <h1>
                    {" "}
                    We offer top-quality courts for individual or group training
                    session
                  </h1>
                  <p>Our courts are designed to help <br /> you train at your best!</p>
                 <div className="d-flex justify-content-between" style={{gap:"1px"}}>
                     <button className="rounded-pill">Book a court </button>
                  <div className="d-flex" style={{gap:"1px", marginRight: "28px"}}>
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
                
              </div>
            </div>
          </div>

          <div className="Card2Sect2">
            <h1>Experience the Best in the Best in Courts , Fields and More</h1>

            <div style={{width: "maxContent"}} >
              <div className="Img">
                <img src={Logo} alt="" style={{
                  height: "0.9cm",
                  width: "0.9cm"
                }}/>
              </div>

              <div className="  d-flex align-items-center " style={{
                gap:"0.5cm"
              }}>
                <div style={{ height: "5cm",
                      width: "4.5cm",
                      borderRadius:"1cm"}}>
                <img style={{
                      height: "5cm",
                      width: "4.5cm",
                      borderRadius:"1cm",
                }} src={Im3} alt="" />
                </div>

                <p style={{
                  width: "100vh"
                }}>
                  Our state-of-the art sports facilities offer a variety of
                  courts and fields, including tennis , basketball , and
                  football , designed to cater to both casual players and
                  competitive athletes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
