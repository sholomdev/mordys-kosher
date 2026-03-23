import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import styles from '@/styles/GalleryPage.module.css';

// 1. Fix: Dynamic imports to prevent the "getter only" SSR error
const ResponsiveMasonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);
const Masonry = dynamic(
  () => import('react-responsive-masonry').then((mod) => mod.default),
  { ssr: false }
);

// Utility for shimmer (Moved outside for cleaner component)
const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

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
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`;

export default function GalleryPage({ images }) {
  const HeaderBg = "https://res.cloudinary.com/dsjy8ydj7/image/upload/mordys-kosher/headerBGs/gallery-bg.jpg";
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  return (
    <Layout>
      <Header title="Gallery" bg={HeaderBg} />
      
      <main className={styles.container}>
        {/* 2. Fix: Actually implementing the Masonry layout */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="15px">

            {images.map((image, index) => (
  <div
    key={image.id}
    onClick={() => openModal(image)}
    className={styles.imageContainer}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && openModal(image)}
  >
    <Image
      src={image.url}
      alt={`Gallery image ${index + 1}`}
      // Use these as the 'base' aspect ratio
      width={image.width || 800} 
      height={image.height || 600}
      // This style is the secret sauce for Masonry + Next/Image
      style={{ 
        width: '100%', 
        height: 'auto', 
        display: 'block',
        borderRadius: '8px' 
      }}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
      priority={index < 6}
    />
  </div>
))}
           
            
          </Masonry>
        </ResponsiveMasonry>
      </main>

      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setModalImage(null);
        }}
      >
        {modalImage && (
          <div className={styles.modalContent}>
            {/* 4. Fix: Next/Image cannot have both 'fill' and 'width/height' */}
            <Image
              src={modalImage.url}
              alt="Detailed view"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </Modal>
    </Layout>
  );
}

export async function getStaticProps() {
  // Simulating a fetching logic (Best practice: move this to a lib file)
  const gallery = Array.from({ length: 19 }, (_, i) => ({
    id: i,
    url: `https://res.cloudinary.com/dsjy8ydj7/image/upload/mordys-kosher/gallery/${i}.jpg`,
    // url: `/images/gallery/${i}.jpg`,
    // Ideally, you'd want width/height from your DB or Cloudinary here
    width: 800,
    height: 600,
  }));

  return {
    props: { images: gallery },
  };
}