import { Navigation, Breadcrumb } from "../../components/Navigation/Navigation";
import Background from "../../assets/images/about/oxford2.jpeg";
import "./gallery.css";
import ImageLoader from "./ImageLoader";
import { useState } from "react";
import DialogCarousel from "./DialogCarousel";

const images = Object.values(
  import.meta.glob("@/assets/images/gallery-lowres/*.{png,jpg,jpeg,PNG,JPEG}", { eager: true, query: "?url", import: "default" })
).map((mod) => mod as string);

const ImageRow = ({ images, loadType, onImgClick }: { images: string[]; loadType: "eager" | "lazy"; onImgClick: (index: number) => void }) => {
  const [loadedCounter, setLoadedCounter] = useState(0);
  const imgLength = images.length;

  return (
    <>
      {images.map((img, i) => {
        return (
          <li key={i} className={`quarter ${i % 4 === 0 ? "first" : ""} ${loadedCounter < imgLength ? "hidden" : ""}`} onClick={() => onImgClick(i)}>
            <ImageLoader imageSrc={img} imgLoading={loadType} loadedCallback={() => setLoadedCounter((c) => c + 1)} />
          </li>
        );
      })}
      {loadedCounter < imgLength && (
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
    imagesWrapper.push(
      <ImageRow key={row} images={rowImages} loadType={row < 1 ? "eager" : "lazy"} onImgClick={(index: number) => setIsOpen(startIdx + index)} />
    );
  }

  const [isOpen, setIsOpen] = useState<false | number>(false);

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

      <DialogCarousel isOpen={isOpen} setIsOpen={() => setIsOpen(false)} images={images} />
    </>
  );
};

export default Gallery;
