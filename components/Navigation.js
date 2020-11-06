import styles from '../styles/navigation.module.scss';
import { useSelector } from 'react-redux';
import Icon from '../components/Icon'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navigation() {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const modalStatus = useSelector( state => {
        return {
            modalType: state.home.modalType,
            modalActive: state.home.modalActive
        }   
    })

    return (
        <div className={modalStatus.modalActive === true && modalStatus.modalType === 'showcase' ? styles.showcaseNav : styles.nav}>
            <div className={styles.logoContainer}>
                <h4>
                    erick canales
                </h4>
            </div>

            <div className={styles.links}>
                <a href='#'>home</a>
                <a href='https://linkedin.com/in/e94canales' target='_blank'>linkedin</a>
                <a href='https://github.com/e94canales' target='_blank'>github</a>
            </div>

            {menuIsOpen ?
            <div className={styles.mobileMenuSidebar}>
                <div className={styles.mobileLinks}>
                <a href='#'>home</a>
                <a href='https://linkedin.com/in/e94canales' target='_blank'>linkedin</a>
                <a href='https://github.com/e94canales' target='_blank'>github</a>
                </div>

                <div className={styles.menuCloseIcon} onClick={() => {setMenuIsOpen(false)}}>
                <Icon iconName={faTimes} />
                </div>

            </div>  : null
            }
            
            <div className={styles.menuIcon} onClick={() => {setMenuIsOpen(!menuIsOpen)}}>
                <Icon iconName={faBars}/>
            </div>
        </div>
    )
}