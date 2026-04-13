import React, { useState } from "react";
import LightGallery from "./LightGallery";

export default function GallerySection({ data }) {
  const [modalToggle, setModalToggle] = useState(false);
  const [initialSlideIndex, setInitialSlideIndex] = useState(0);

  const slideTo = (index) => {
    setInitialSlideIndex(index);
    setModalToggle(true);
  };
  return (
    <>
      <div className="container">
        <div className="cs_gallery cs_style_2">
          {data?.map((item, index) => (
            <div
              className="cs_gallery_item cs_bg_filed"
              style={{
                backgroundImage: `url(${item.imageSrc})`,
              }}
              key={index}
              onClick={() => slideTo(index)}
            >
              <div className="cs_gallery_hover">
                <span></span>
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="cs_gallery_grid_1">
          {data?.map((item, index) => (
            <div
              key={index}
              to={item.imgSrc}
              className="cs_gallery cs_style_1 cs_center cs_gallery_item"
              style={{
                height: `${item.height}`,
                backgroundImage: `url(${item.imageSrc})`,
              }}
              onClick={() => slideTo(index)}
            >
              <img src={item.imgSrc} alt="" />
              <span className="cs_gallery_info_wrap cs_center">
                <span className="cs_gallery_info text-center cs_center">
                  <span className="cs_white_color cs_fs_16 cs_bold cs_mb_4 d-block">
                    {item.title}
                  </span>
                  <span className="cs_white_color d-block">{item.year}</span>
                </span>
              </span>
            </div>
          ))}
        </div>
        <LightGallery
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          galleryList={data}
          initialSlideIndex={initialSlideIndex}
        />
      </div>
    </>
  );
}
