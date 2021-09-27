import styles from '../styles/Layout.module.css';
import Meta from './Meta';
import Nav from './Nav';
import Header from './Header';

const Layout = ( { children } ) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.contaner}>
                <main className={styles.main}> 
                    <Header />
                    { children }
                </main>
            </div>
        </>
    )
}

export default Layout;