import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-end space-x-11 mr-11 items-center h-10'>
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
                <hr className='h-px bg-gray-950 border-0' />
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;