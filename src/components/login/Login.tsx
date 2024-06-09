import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { startAuthentication } from '@simplewebauthn/browser';
import toast from 'react-hot-toast';

const Login: React.FC = () => {
    const { BASEURL, setUser } = useUser()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!formData.email) {
            return toast.error("Please Enter Email")

        }
        if (!formData.password) {
            return toast.error("Please Enter Password")
        }
        try {
            const resp = await axios.post(`${BASEURL}/auth/login`, formData)
            if (resp.data.success) {
                toast.success("Login Successfull")
                const { token, userId } = resp.data
                window.localStorage.setItem('token', token);
                window.localStorage.setItem('userId', userId);
                setUser(resp.data)
            } else {
                toast.error("Internal Server error");
            }
        } catch (err: any) {
            console.log(err)
            toast.error(err.response.data.message);
        }
    }

    const loginWithPasskey = async (e: any) => {
        e.preventDefault();
        if (!formData.email) {
            return toast.error("Please Enter Email")
        }
        try {
            const bodyData = { email: formData.email };
            const resp = await axios.post(`${BASEURL}/auth/login-challenge/`, bodyData);

            if (resp.data.success === true) {
                const { options } = resp.data;
                const authenticationResult = await startAuthentication(options);
                const verificationData = {
                    email: formData.email,
                    cred: authenticationResult
                };
                const isVerified = await axios.post(`${BASEURL}/auth/login-verify`, verificationData);
                if (isVerified.data.success === true) {
                    const { token, userId } = isVerified.data;
                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('userId', userId);
                    setUser(isVerified.data);
                    toast.success(isVerified.data.message);
                } else {
                    toast.error(isVerified.data.message);
                }
            } else {
                toast.error(resp.data.message);
            }
        } catch (error: any) {
            console.error("Error during login process:", error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-6">
            <div className="flex flex-col items-center justify-cente px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-3 md:space-y-3" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="flex items-center justify-end">
                                <a href="#" onClick={() => toast.success("Feature Coming Soon")} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <button type='button' onClick={loginWithPasskey} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login with Passkey</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
