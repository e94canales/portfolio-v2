import ResCarousel from "../components/Carousel";
import styles from '../styles/modal.module.scss';

export default function Modal(props) {
  return (
    <div className={styles.modalContainer}>
        <div className={styles.carouselContainer}>
            <ResCarousel />
        </div>
    </div>
  );
}
