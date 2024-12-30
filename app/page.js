import React from "react";

const Page = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        height: "200vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
        }}
      >
        <img
          src="/images/imagen1.png"
          alt="Descripción de la imagen 1"
          style={{
            position: "absolute",
            top: "-60%",
            left: "9.3%",
            transform: "translate(-17%, 92.5%)",
            zIndex: 2,
            width: "auto",
            maxWidth: "100%",
            height: "500px",
            maxHeight: "600%",
          }}
        />
        <img
          src="/images/imagen2.png"
          alt="Descripción de la imagen 2"
          style={{
            position: "absolute",
            top: "-45%",
            left: "29.1%",
            transform: "translate(-50%, 50%)",
            zIndex: 3,
            width: "auto",
            maxWidth: "100%",
            height: "160%",
            maxHeight: "200%",
          }}
        />

        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: "1%",
            top: "72%",
            zIndex: 4,
            width: "177px",
            height: "5px",
            visibility: "visible",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: "1%",
            top: "93%",
            zIndex: 4,
            width: "177px",
            height: "5px",
            visibility: "visible",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: "1%",
            top: "114.3%",
            zIndex: 4,
            width: "199px",
            height: "5px",
            visibility: "visible",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: "1%",
            top: "136%",
            zIndex: 4,
            width: "217px",
            height: "6px",
            visibility: "visible",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: "1%",
            top: "93%",
            zIndex: 4,
            width: "177px",
            height: "5px",
            visibility: "visible",
          }}
        ></div>

        <div
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: "1%",
            top: "157%",
            zIndex: 4,
            width: "177px",
            height: "5px",
            visibility: "visible",
          }}
        ></div>

        <img
          src="/images/imagen3.png"
          alt="Descripción de la imagen 3"
          style={{
            position: "absolute",
            top: "-15%",
            left: "5%",
            transform: "translate(50%, 50%)",
            zIndex: 1,
            width: "auto",
            maxWidth: "100%",
            height: "130%",
            maxHeight: "200%",
          }}
        />
        <div
          style={{
            color: "black",
            fontSize: "40px",
            fontFamily: "  Helvetica",
          }}
        >
          
        </div>
      </div>
      
    </div>
  );
};

export default Page;
