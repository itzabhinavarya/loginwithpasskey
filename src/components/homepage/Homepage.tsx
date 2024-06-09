import React from 'react';
import { Link } from 'react-router-dom';

const imageURL = 'https://www.engineersgarage.com/wp-content/uploads/2021/10/TCH34-01.jpg'

const Homepage: React.FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex w-full">
            <div className="px-14 py-8 flex justify-between w-full ">
                <div className="md:w-1/2 flex flex-col items-start w-full">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                        Login using <span className='text-blue-700'>PassKey</span>
                    </h1>
                    <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
                        You can use your Fingerprint/Biometrics, Android Devices, Windows Hello, Apple/Mac/iPad Touch ID to login.
                    </p>
                    <Link to='/setting'>
                        <div className='mt-4'>
                            <button className='p-2 shadow-md text-white bg-blue-700 rounded-lg hover:bg-blue-950 border border-blue-800 flex items-center justify-center'>Get Started</button>
                        </div>
                    </Link>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-end ">
                    <img src={imageURL} alt="Sample Image" className="rounded-lg shadow-lg object-cover w-4/5 h-4/5" />
                </div>
            </div>
        </section>
    );
};

export default Homepage;
