import React, { useState } from "react";

import homeImage from "../images/home_image.png";

const CoursePage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      <div class="courseImageContainer">
        <div className="imageGradient"></div>
        <img src={homeImage} alt="Home" />
        <h1 className="textBottomLeft">
          Course page{" "}
          {window.location.pathname.substring(
            window.location.pathname.lastIndexOf("/") + 1
          )}
        </h1>
        <p className="textBottomRight">Like ratio: XX%</p>
      </div>

      <div className="courseContent">
        <div className="courseLeftContent">
          <div className="courseButtons">
            <button>
              <p>Subscribe</p>
            </button>
            <button>
              <p>👍 </p>
            </button>
            <button>
              <p> 👎</p>
            </button>
          </div>
          <div className="courseDescription">
            <button onClick={() => setVisible(!visible)}>
              Description {visible ? "▲" : "▼"}
            </button>
            <div className="courseDescriptionTextBox ">
              {visible && (
                <p>
                  Duis Lorem consequat irure sint consectetur sunt anim nisi
                  consectetur. Ea aliquip quis magna et anim consectetur labore
                  incididunt adipisicing voluptate exercitation officia. Anim
                  consectetur ea cillum excepteur ut aute do et do. Non
                  excepteur elit cillum ullamco velit consectetur culpa ullamco
                  excepteur cillum sit proident.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="courseVideos">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe>
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
