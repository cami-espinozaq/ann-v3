import { Navigation, Breadcrumb } from "../../components/Navigation/Navigation";
import Background from "../../assets/images/about/oxford2.jpeg";
import "./gallery.css";
import ImageLoader from "./ImageLoader";
import { useState } from "react";

const images = Object.values(import.meta.glob("/src/assets/images/gallery-lowres/*.{png,jpg,jpeg,PNG,JPEG}", { eager: true, as: "url" }));

const ImageRow = ({ images, loadType }: { images: string[]; loadType: "eager" | "lazy" }) => {
  const [loadedCounter, setLoadedCounter] = useState(0);
  return (
    <>
      {images.map((img, i) => {
        return (
          <li key={i} className={`quarter ${i % 4 === 0 ? "first" : ""} ${loadedCounter < 4 ? "hidden" : ""}`}>
            <ImageLoader imageSrc={img} imgLoading={loadType} loadedCallback={() => setLoadedCounter((c) => c + 1)} />
          </li>
        );
      })}
      {loadedCounter < 4 && (
        <div role="status" className="w-full animate-pulse flex">
          <li className="h-40 bg-gray-100 quarter first"></li>
          <li className="h-40 bg-gray-100 quarter"></li>
          <li className="h-40 bg-gray-100 quarter"></li>
          <li className="h-40 bg-gray-100 quarter"></li>
        </div>
      )}
    </>
  );
};

const Gallery = () => {
  const totalRows = Math.ceil(images.length / 4);
  const imagesWrapper = [];
  for (let row = 0; row < totalRows; row++) {
    const startIdx = row * 4;
    const endIdx = startIdx + 4;
    const rowImages = images.slice(startIdx, endIdx);
    imagesWrapper.push(<ImageRow key={row} images={rowImages} loadType={row < 1 ? "eager" : "lazy"} />);
  }

  return (
    <>
      <Navigation backgroundUrl={Background}>
        <Breadcrumb activePage="Gallery" />
      </Navigation>
      <div className="wrapper main-row">
        <main className="hoc container clear">
          <figure className="gallery">
            <header className="heading">Gallery</header>
            <ul className="clear gallery">{imagesWrapper}</ul>
          </figure>
        </main>
      </div>
    </>
  );
};

export default Gallery;
