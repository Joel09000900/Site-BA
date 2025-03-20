import React from "react";
import "./header.css";
import Im1 from "../../assets/page1/im (1).jpg";
import Im11 from "../../assets/page1/im (14).jpg";
import Im12 from "../../assets/page1/im (12).jpg";
import Im13 from "../../assets/page1/im (13).jpg";
import HeaderLogo from "../../assets/page1/HeaderHeros.jpg";
import Links from "../Links";

export default function header() {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <a href="" style={{ color: "white" }}>
              Accueil
            </a>
          </li>
          <li>
            <a href="">Informations</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <h2>BERIVERSE ACADEMY</h2>
        <div className="Login  d-flex align-items-center">
          <div
            className=" btn d-flex align-items-center justify-content-center"
            style={{
              height: "1cm",
              width: "7.0cm",

              background: "white",
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
            className=" LoginConnexion d-flex align-items-center justify-content-center"
            
          >
            Connexion
          </button>
        </div>
      </div>

      <div className="headerImage">
        <img src={HeaderLogo} alt="im1" className="im1"  style={{height: "21cm"}}/>
      </div>

      <section
        style={{
          position: "relative",
          color: " white",
          bottom: "18cm",
          display: "flex",
          justifycontent: "spacebetween",
        }}
      >
        <div
          className=" QueryHeader  d-flex justify-content-center align-items-center"
          style={{ height: "10cm", gap: "6cm", color: "black", width: "100%" }}
        >
          <div className=" QueryHeaderSect1 d-flex flex-column text-light">
            <Links />
            <h1>
              Your Play , Your Way - Modern Sports Facilities <br />
              for Every Passion
            </h1>
          </div>

          <div className=" QueryHeaderSect2 d-flex flex-column justify-content-center align-items-center">
            
              <div className="rounded-pill" style={{ backgroundColor: "#D3D3D3" }}>
                  <img src={Im11} alt="im14" className="im11" />
                  
                  <img src={Im12} alt="im12" className="im12" />
              
                  <img src={Im13} alt="im13" className="im13" />
         
                </div>  
            <h4 className=" d-flex justify-content-center" >
              Were committed to delivering a high-quality experience in a
              welcoming and supportive astmosphere.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
