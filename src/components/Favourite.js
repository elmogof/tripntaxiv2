import React, { useEffect, useState } from "react";
import tverde from "../media/verde.png";
import { Carousel } from "react-responsive-carousel";
import GuidedTourModal from "./GuidedTourModal";
import { useTranslation } from "react-i18next";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Favourite() {
  const { t } = useTranslation();
  const favorito = t("favorito");
  var centerSlidePercentage = 33.5;
  var widthPercentage = "85%";

  const size = useWindowSize();
  if (size.width < 768) {
    centerSlidePercentage = 100;
    widthPercentage = "90%";
  }

  return (
    <>
      <div
        className="container-fluid d-flex flex-column px-0 pt-5 pt-lg-0"
        style={{ background: "#415165" }}
      >
        <div className="d-none d-lg-inline" style={{ marginBottom: "-7rem" }}>
          <img
            className="float-start decoration"
            src={tverde}
            alt=""
            height="200"
            width="200"
          />
        </div>
        <h1 className="fw-bold text-center text-white">PICK OF THE WEEK</h1>
        <div className="d-flex flex-column flex-xl-row justify-content-center py-3 px-lg-5">
          <div className="col-lg d-flex flex-column justify-content-between py-3 text-center px-3">
            <Carousel
              className="d-flex justify-content-center"
              autoPlay
              centerMode
              infiniteLoop
              showStatus={false}
              stopOnHover
              centerSlidePercentage={centerSlidePercentage}
              showThumbs={false}
              width={widthPercentage}
              showIndicators={false}
            >
              {favorito.images.map((image) => {
                return (
                  <div className="align-self-center" key={image.id}>
                    <img
                      className="p-1 fit-img-favourite"
                      src={`/images/${favorito.subname}/${image}`}
                      alt={image}
                    />
                  </div>
                );
              })}
            </Carousel>
            <div className="d-flex flex-column align-items-center justify-content-between pt-3 mx-md-5 px-3 px-sm-5">
              <div>
                <h4 className="text-center text-white text-break">
                  {favorito.title}
                </h4>
              </div>
              <div>
                <p className="fs-6 text-center text-white px-lg-5 text-break">
                  {favorito.description}
                </p>
              </div>
              <GuidedTourModal tour={favorito} btnSize="btn-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
