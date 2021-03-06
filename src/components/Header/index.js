import { Link } from 'react-router-dom';
import styles from './Header.module.css';


function Header(props) {
    return (
        <header className={styles.Header}>
            <Link to="/">
                <p>Home</p>
            </Link>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li>
                                <Link to="" onClick={props.handleLogout}>Logout</Link>
                            </li>
                            <li>
                                <Link to="/animals">All Animals</Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
};



export default Header;