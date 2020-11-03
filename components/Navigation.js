import styles from '../styles/navigation.module.scss';

import Icon from '../components/Icon'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {

    return (
        <div className={styles.nav}>
            <div className={styles.logoContainer}>
                <h4>
                    erick canales
                </h4>
            </div>

            <div className={styles.links}>
                <a href='#'>home</a>
                <a href='#'>portfolio</a>
                <a href='#'>github</a>
            </div>

            <div className={styles.menuIcon}>
                <Icon iconName={faBars}/>
            </div>
        </div>
    )
}