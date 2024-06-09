import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, token } = useUser()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignout = () => {
        setIsMenuOpen(false)
        localStorage.clear()
        toast.success("Sign Out Successfull")
    }

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md">
            <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PassWithKey</span>
                </Link>
                {token ? (
                    <button type="button" className="flex px-4 py-2 text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="user-dropdown">
                        {/* <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user photo" /> */}
                        <span className="block text-sm text-gray-900 dark:text-white">{user?.fullname}</span>
                    </button>
                ) : (
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to='/login' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to='/signup' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Signup
                                </Link>
                            </li>

                        </ul>
                    </div>
                )}
            </div>
            {isMenuOpen && (
                <div className="absolute right-7 flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* Dropdown menu */}
                    <div className={`z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">{user?.fullname}</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                        </div>
                        <ul className="py-2">
                            <Link to='/setting' onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                Settings
                            </Link>
                            <li>
                                <a href="#" onClick={handleSignout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
