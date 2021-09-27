import Link from 'next/link';
import navStyle from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <>
            <nav className={ navStyle.nav }>
                <ul className={ navStyle.ul}>
                    <li className={ navStyle.li }>
                        <Link href="/" >Home</Link>
                    </li>
                    <li>
                        <Link href="/about" >About</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;