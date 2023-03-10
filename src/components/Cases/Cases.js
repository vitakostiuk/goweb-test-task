import React, { useState, useEffect } from 'react';
import { images } from './images';
import { photos } from './photos';
import prev from '../../images/gallery/prev.png';
import next from '../../images/gallery/next.png';
import close from '../../images/gallery/close.png';
import loading from '../../images/gallery/loading.gif';
import s from './Cases.module.css';

const Cases = () => {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [normalizedImages, setNormalizedImages] = useState(images);
  const [normalizedPhotos, setNormalizedPhotos] = useState(photos);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // dynamic screen width
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = image => {
    setIsOpenModal(true);
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  useEffect(() => {
    setIsLoading(false);
    setIsOpenModal(false);

    if (screenSize.dynamicWidth < 768) {
      setNormalizedImages(images);
    } else {
      setNormalizedImages(images.slice(0, 6));
    }

    if (screenSize.dynamicWidth < 768) {
      setNormalizedPhotos(photos);
    } else {
      setNormalizedPhotos(photos.slice(0, 6));
    }
  }, [screenSize.dynamicWidth]);

  //looping through our images array to create img elements
  const imageCards = normalizedImages.map(
    ({ id, url_JPG, url_JPG2x, url, url2x }) => (
      <div key={id} className={s.thumb} onClick={() => showImage(url_JPG)}>
        <picture className={s.img}>
          {' '}
          <source srcSet={`${url} 1x ${url2x} 2x`} type="image/webp" />
          <img
            srcSet={`${url_JPG} 1x ${url_JPG2x} 2x`}
            src={url_JPG}
            alt="Cases1_JPG"
            type="image/jpeg"
          />
        </picture>
      </div>
    )
  );

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
    setIsLoading(false);
  };

  //show next image in lightbox
  const showNext = e => {
    e.stopPropagation();
    let currentIndex = normalizedPhotos.indexOf(imageToShow);
    if (currentIndex >= normalizedPhotos.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = normalizedPhotos[currentIndex + 1];
      setIsLoading(true);
      setIsOpenModal(false);
      setImageToShow(nextImage);
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
  };

  //show previous image in lightbox
  const showPrev = e => {
    e.stopPropagation();
    let currentIndex = normalizedPhotos.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = normalizedPhotos[currentIndex - 1];
      setIsLoading(true);
      setIsOpenModal(false);
      setImageToShow(nextImage);
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
  };

  return (
    <section name="Cases" className={s.container}>
      <div className={s.textBlock}>
        <h3 className={s.subtitle}>This is what we do</h3>
        <h3 className={s.title}>Business Cases</h3>
        <p className={s.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>
      <div className={s.galleryBlock}>{imageCards}</div>
      {lightboxDisplay ? (
        <div className={s.lightbox} onClick={hideLightBox}>
          <div className={s.lightboxWrpper}>
            <div className={s.imgWrapper}>
              {isLoading && (
                <div className={s.loader}>
                  {' '}
                  <img className={s.loading} src={loading} alt="loading" />
                </div>
              )}{' '}
              {!isLoading && (
                <>
                  {' '}
                  <img
                    className={s.prev}
                    src={prev}
                    alt="prev"
                    onClick={showPrev}
                  />
                  <img
                    className={isOpenModal ? s.lightboxImgAnim : s.lightboxImg}
                    src={imageToShow}
                    alt="wer"
                  />
                  <img
                    className={s.next}
                    src={next}
                    alt="next"
                    onClick={showNext}
                  />
                </>
              )}
            </div>
            <div className={s.close}>
              {' '}
              <img src={close} alt="close" onClick={hideLightBox} />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default Cases;
