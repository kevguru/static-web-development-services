type imageType = {
  src: string;
  alt: string;
  className: string;
};

// const ImageLazy = ({ src, alt, className }: imagetype) => {

//   return (
//     <Suspense fallback={<LoadingImage altName={alt} />}>
//       <img src={src} alt={alt} className={className} loading="lazy" />
//     </Suspense>
//   );
// };

// type loadingType = {
//   altName: string;
// };

// const LoadingImage = ({ altName }: loadingType) => {
//   return <div className="loading__image">{altName}</div>;
// };

// export default ImageLazy;

import { useRef, useState, useEffect, ReactEventHandler } from 'react';

const LazyImage = ({ src, alt, className = '' }: imageType) => {
  const imgRef = useRef<null | HTMLImageElement>(null);
  const loadRef = useRef<null | HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imgRef?.current!);
        }
      },
      {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5,
      }
    );

    if (imgRef.current) {
      return observer.observe(imgRef?.current!);
    }

    if (loadRef.current) {
      return observer.observe(loadRef.current);
    }

    return () => {
      if (observer && observer.unobserve && imgRef && imgRef.current) {
        observer.unobserve(imgRef.current);
      }

      if (observer && observer.unobserve && loadRef && loadRef.current) {
        observer.unobserve(loadRef.current);
      }
    };
  }, [imgRef]);

  console.log(isLoading);

  
  const onloadHandler: ReactEventHandler<HTMLImageElement> = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className={`loading-image ${className}`} ref={loadRef}>
          This is Image
        </div>
      )}
      <img ref={imgRef} src={isVisible ? src : ''} alt={alt} className={`lazy-image ${className} ${isVisible ? 'loaded' : ''}`} onLoad={onloadHandler} onError={() => setIsLoading(false)} />
    </>
  );
};

export default LazyImage;
