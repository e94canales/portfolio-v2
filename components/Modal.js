import ResCarousel from "../components/Carousel";
import styles from '../styles/modal.module.scss';
import Icon from '../components/Icon';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { homeActions } from '../redux/actions';


export default function Modal(props) {

  const dispatch = useDispatch();

  return (
    <div className={styles.modalContainer}>
        <div className={styles.carouselContainer}>
            <ResCarousel />
        </div>
        <div className={styles.closeContainer}>
          <div className={styles.iconContainer} onClick={() => {
              dispatch(homeActions.setModalType(null))
              dispatch(homeActions.toggleModalActive('override', false))
            }}>
            <Icon iconName={faTimes} />
          </div>
        </div>
    </div>
  );
}
