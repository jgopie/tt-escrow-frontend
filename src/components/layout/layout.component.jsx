import './layout.styles.scss';
import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div>
            <nav className='nav-main'>
                <ul className='nav-list'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/sign-up'>Sign Up</Link>
                    </li>
                </ul>
                <hr className='' />
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;