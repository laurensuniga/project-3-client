import styles from './Header.module.css';

function Header(props) {
    return (
        <header className={styles.Header}>
            <h1>Project 3</h1>
            <nav>
                <ul>
                    <li>Login</li>
                    <li>Logout</li>
                    <li>Signup</li>
                    <li>Dashboard</li>
                    {/* the page you'll only see if you are logged in */}
                </ul>
            </nav>
        </header>
    );
};



export default Header;