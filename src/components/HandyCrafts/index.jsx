import React from "react";
import "./handycrafts.scss";
const handyImages = [
  { id: 1, url: "./handicrafts/IMG_1357.jpg", alt: "Handicraft 1" },
  { id: 2, url: "./handicrafts/IMG_1358.jpg", alt: "Handicraft 2" },
  { id: 3, url: "./handicrafts/IMG_1359.jpg", alt: "Handicraft 3" },
  { id: 4, url: "./handicrafts/IMG_1361.jpg", alt: "Handicraft 4" },
  { id: 5, url: "./handicrafts/IMG_1362.jpg", alt: "Handicraft 5" },
  { id: 6, url: "./handicrafts/IMG_1363.jpg", alt: "Handicraft 6" },
  { id: 7, url: "./handicrafts/IMG_1364.jpg", alt: "Handicraft 7" },
  { id: 8, url: "./handicrafts/IMG_1365.jpg", alt: "Handicraft 8" },
  { id: 9, url: "./handicrafts/IMG_1400.jpg", alt: "Handicraft 9" },
  { id: 10, url: "./handicrafts/IMG_1404.jpg", alt: "Handicraft 10" },
  { id: 11, url: "./handicrafts/IMG_1406.jpg", alt: "Handicraft 11" },
  { id: 12, url: "./handicrafts/IMG_1407.jpg", alt: "Handicraft 12" },
  { id: 13, url: "./handicrafts/IMG_1410.jpg", alt: "Handicraft 13" },
  { id: 14, url: "./handicrafts/IMG_1412.jpg", alt: "Handicraft 14" },
  { id: 15, url: "./handicrafts/IMG_1413.jpg", alt: "Handicraft 15" },
  { id: 16, url: "./handicrafts/IMG_1415.jpg", alt: "Handicraft 16" },
  { id: 17, url: "./handicrafts/IMG_1417.jpg", alt: "Handicraft 17" },
  { id: 18, url: "./handicrafts/IMG_1418.jpg", alt: "Handicraft 18" },
  { id: 19, url: "./handicrafts/IMG_1420.jpg", alt: "Handicraft 19" },
  { id: 20, url: "./handicrafts/IMG_1421.jpg", alt: "Handicraft 20" },
  { id: 21, url: "./handicrafts/IMG_1422.jpg", alt: "Handicraft 21" },
  { id: 22, url: "./handicrafts/IMG_1423.jpg", alt: "Handicraft 22" },
];

const HandyCrafts = () => {
  return (
    <div className="handicrafts-container">
      {handyImages.map((item, id) => {
        return (
          <div key={id} className="handicrafts-container_image">
            <img src={item.url} alt={item.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default HandyCrafts;
