import styles from '../styles/layout.module.scss';

// COMPONENTS
import Navigation from '../components/Navigation';


export default function Layout({ children }) {

    return (
        <div className={styles.container}>
            <Navigation />
            {children}
        </div>
    )
}