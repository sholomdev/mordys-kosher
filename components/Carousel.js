import React, { useState, useEffect, useCallback } from 'react';
import { DotButton, PrevButton, NextButton } from './CarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import styles from '@/styles/Carousel.module.css';

const EmblaCarousel = ({ menuItems }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  let priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {menuItems &&
              menuItems.map((item) => (
                <div className={styles.embla__slide} key={item.name}>
                  <div className={styles.body}>
                    <h4>{item.name}</h4>
                    {item.note && <h5>{item.note}</h5>}
                    <span className={styles.price}>
                      {priceFormatter.format(item.price)}
                    </span>
                  </div>
                  <div className={styles.embla__slide__inner}>
                    <div className={styles.image}>
                      <Image
                        fill
                        className={styles.image}
                        style={{ objectFit: 'cover' }}
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      {/* <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div> */}
    </>
  );
};

export default EmblaCarousel;
