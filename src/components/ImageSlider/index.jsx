import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  illustrationImages,
  handyImages,
  paintingImages,
  graphicImages,
  designImages,
} from "../../utils/data";
function getRandomImage(imagesArray) {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex].url;
}

// Number of random images you want to display
const numberOfRandomImages = 10;

// Array to store random image URLs
const randomImageURLs = [];

// Selecting random images from each category
for (let i = 0; i < numberOfRandomImages; i++) {
  randomImageURLs.push(
    // getRandomImage(handyImages),
    getRandomImage(paintingImages),
    // getRandomImage(graphicImages),
    // getRandomImage(designImages),
    // getRandomImage(illustrationImages)
  );
}
const index = () => {
  return (
    <Zoom scale={1.4} indicators={false}>
      {randomImageURLs.map((url, index) => (
        <div
          key={index}
          style={{ width: "80%", height: "80vh", margin: "0 auto" }}
        >
          <img
            style={{ objectFit: "contain", width: "100%",height:"100%" }}
            alt="Random Image"
            src={url}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default index;
