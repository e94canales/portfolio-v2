import styles from '../styles/navigation.module.scss';

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
        </div>
    )
}