import React from "react";
import "./Section3.css";
import CardList from "./Card/CardList";


function Section3() {
  return (
    <>
      <div className="Section3">
        <div className="NavSect3">
          <div className="Button">
            <p className="btn rounded-pill border">Facilities</p>
            <h3>Explore Our Facilities</h3>
          </div>

          <div>
            <div className="d-flex align-items-center">
            <div
            className=" d-flex align-items-center justify-content-center"
            style={{
              height: "1cm",
              width: "7.0cm",
              background: "#e1e1e1",
              borderRadius: "66px",
              borderColor: "white",
            }}
          >
                   <input style={{border:"none"}} type="text" placeholder="Recherche" />
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
              <button
                className=" d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "black",
                  width: "4cm",
                  height: "1cm",
                  borderRadius: "66px",
                  color: "white",
                }}
              >
                View All
              </button>
            </div>
          </div>
        </div>

        <CardList />

        <div className=" Section3Footer d-flex justify-content-center">
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

          <h1 className="text-end " style={{
                                fontSize: "17px",
                                width: "13cm",
                                fontWeight: "200"                   
          }}>
            Book a court for focused proctice , team drills , or private
            coaching , and take your game to the next level{" "}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Section3;
