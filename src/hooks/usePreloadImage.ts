import { useState, useEffect } from 'react';

const usePreloadImage = (srcArray: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    const preloadImages = (srcArray: string[]) => {
      const promises = srcArray.map(
        (url) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = reject;
          }),
      );

      Promise.all(promises)
        .then(() => {
          setImagesLoaded(true);
        })
        .catch((error) => console.error('Image preloading failed', error));
    };

    preloadImages(srcArray);
  }, [srcArray]);

  return { imagesLoaded };
};

export default usePreloadImage;
