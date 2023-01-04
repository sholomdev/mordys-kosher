import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import styles from '@/styles/GalleryPage.module.css';
import HeaderBg from '../public/images/headerBGs/gallery-bg.jpg';
import Modal from '@/components/Modal';
import { useState } from 'react';

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export default function GalleryPage({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };
  return (
    <Layout>
      <Header title="Gallery" bg={HeaderBg} />
      <div className={styles.gallery}>
        {images.map((image) => (
          // <img
          //   key={image.id}
          //   alt=""
          //   src={image.formats?.small?.url || images.url}
          // ></img>
          <div
            key={image.id}
            onClick={() => openModal(image)}
            className={styles.imageContainer}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={image.formats?.small?.url || image.url}
              alt=""
            ></Image>
          </div>
        ))}
      </div>

      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setModalImage(null);
        }}
        height={modalImage && modalImage.height}
        width={modalImage && modalImage.width}
      >
        {modalImage && (
          <Image
            src={modalImage.url}
            layout="fill"
            objectFit="contain"
            width={modalImage.width}
            height={modalImage.height}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            alt=""
          ></Image>
        )}
      </Modal>
    </Layout>
  );
}

export async function getStaticProps() {
  const gallery = Array.from({ length: 19 }, (x, i) => i).map((i) => ({
    id: i,
    url: `/images/gallery/${i}.jpg`,
  }));

  return {
    props: { images: gallery },
  };
}
