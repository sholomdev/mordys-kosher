import { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import styles from '@/styles/Modal.module.css';

export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  // Memoize close function to prevent unnecessary re-renders
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    setIsBrowser(true);

    // Escape key listener
    const closeOnEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };

    if (show) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', closeOnEscape);
    }

    // Cleanup function: Vital for SPA navigation
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [show, handleClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const modalContent = show ? (
    <div 
      className={styles.overlay} 
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title || ''}</h3>
          <button 
            onClick={handleClose} 
            className={styles.closeBtn} 
            aria-label="Close Modal"
          >
            <FaTimes />
          </button>
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    const root = document.getElementById('modal-root');
    return root ? ReactDOM.createPortal(modalContent, root) : null;
  }
  return null;
}