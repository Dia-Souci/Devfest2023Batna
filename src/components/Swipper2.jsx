// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swipper2.css";

import { Navigation,  Mousewheel, Keyboard } from "swiper/modules";


function Swipper2() {
  //const isMobile = useMediaQuery({ query: `(max-width: 1133px)` });

  return (
    <Swiper
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      navigation={true}
      modules={[Navigation, Mousewheel, Keyboard]}>
      <SwiperSlide>
        <div className="swiper2" style={{ padding: "20px" }}>
          <div style={{ position: "relative" }}>
            <div
              className="shape-container4"
              style={{ position: "absolute", bottom: -15, right: -15 ,width: "100%" ,height:"100%",display:"flex",alignItems: "flex-end",
              justifyContent: "flex-end"}}>
              <img
                className="shape-image4" id = "shape-container-second"
                src="/Illustration1.svg"
                alt="shape2"
                style={{
                  
                  height: "auto",
                  maxWidth: "130px",
                  maxHeight: "134px",
                }}
              />
            </div>

            <div
              className="shape-container4"
              style={{ position: "absolute", top: -15, left: -15 }}>
              <img
                className="shape-image4" id = "shape-container-second"
                src="/Illustration2.svg"
                alt="shape2"
                style={{
                  
                  height: "auto",
                  maxWidth: "113px",
                  maxHeight: "150px",
                }}
              />
            </div>

            <img
              src="/IMG_1.png"
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "426px",
                maxHeight: "431px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="bio-container">
            <h1 className="speaker-name">Ahmed Ahmed</h1>
            <div
              style={{
                position: "relative",
              }}>
              <img
                src="/bio-container.svg"
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "655px",
                  maxHeight: "367px",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  zIndex: 1, // Set a higher zIndex for the text
                  fontSize: "2vw",
                }}>
                Flutter GDE,From Algeria
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide style={{ padding: "20px" }}>
        <div className="swiper2">
          <div style={{ position: "relative" }}>
            <div
              className="shape-container4"
              style={{ position: "absolute", bottom: -15, right: -15 ,width: "100%" ,height:"100%",display:"flex",alignItems: "flex-end",
              justifyContent: "flex-end"}}>
              <img
                className="shape-image4" id = "shape-container-second"
                src="/Illustration1.svg"
                alt="shape2"
                style={{
                  height: "auto",
                  maxWidth: "130px",
                  maxHeight: "134px",
                }}
              />
            </div>

            <div
              className="shape-container4"
              style={{ position: "absolute", top: -15, left: -15 }}>
              <img
                className="shape-image4" id = "shape-container-second"
                src="/Illustration2.svg"
                alt="shape2"
                style={{
                  height: "auto",
                  maxWidth: "113px",
                  maxHeight: "150px",
                }}
              />
            </div>

            <img
              src="/IMG_1.png"
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "426px",
                maxHeight: "431px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="bio-container">
            <h1 className="speaker-name">Ahmed Ahmed</h1>
            <div
              style={{
                position: "relative",
              }}>
              <img
                src="/bio-container.svg"
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "655px",
                  maxHeight: "367px",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  zIndex: 1, // Set a higher zIndex for the text
                  fontSize: "2vw",
                }}>
                Flutter GDE,From Algeria
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide style={{ padding: "20px" }}>
        <div className="swiper2">
          <div style={{ position: "relative" }}>
            <div
              className="shape-container4"
              style={{ position: "absolute", bottom: -15, right: -15 ,width: "100%" ,height:"100%",display:"flex",alignItems: "flex-end",
              justifyContent: "flex-end"}}>
              <img
                className="shape-image4" id = "shape-container-second"
                src="/Illustration1.svg"
                alt="shape2"
                style={{
                  height: "auto",
                  maxWidth: "130px",
                  maxHeight: "134px",
                }}
              />
            </div>

            <div
              className="shape-container4"
              style={{ position: "absolute", top: -15, left: -15 }}>
              <img
                className="shape-image4" id = "shape-container-second"
                src="/Illustration2.svg"
                alt="shape2"
                style={{
                  height: "auto",
                  maxWidth: "113px",
                  maxHeight: "150px",
                }}
              />
            </div>

            <img
              src="/IMG_1.png"
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "426px",
                maxHeight: "431px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="bio-container">
            <h1 className="speaker-name">Ahmed Ahmed</h1>
            <div
              style={{
                position: "relative",
              }}>
              <img
                src="/bio-container.svg"
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "655px",
                  maxHeight: "367px",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  zIndex: 1,
                  fontSize: "2vw", // Adjust the font size using vw units
                }}>
                Flutter GDE, From Algeria
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Swipper2;
