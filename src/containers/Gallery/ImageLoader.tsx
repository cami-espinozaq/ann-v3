import { useEffect } from "react";

const ImageLoader = ({ imageSrc, imgLoading, loadedCallback }: { imageSrc: string; imgLoading?: "eager" | "lazy"; loadedCallback?: () => void }) => {
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          loadedCallback?.();
        });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc]);

  return <img src={imageSrc} alt="gallery" loading={imgLoading} />;
};

export default ImageLoader;
