import axios from 'axios';
import React, { useState, useContext, createContext, ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';

// Define the type for the user context
interface UserContextType {
    user: any; // Change 'any' to the actual type of user
    BASEURL: string,
    token: any,
    userId: any,
    loading: boolean,
    setUser: React.Dispatch<React.SetStateAction<any>>; // Change 'any' to the actual type of user
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
    const userContext = useContext(UserContext);
    if (!userContext) {
        throw new Error('useUser must be used within a UserContextProvider');
    }
    return userContext;
};

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any>(null); // Change 'any' to the actual type of user
    const [loading, setLoading] = useState(true)
    const BASEURL = import.meta.env.VITE_REACT_APP_BASE_URL;
    var token = window.localStorage.getItem('token')
    var userId = window.localStorage.getItem('userId')

    const getSingleUser = async () => {
        try {
            const resp = await axios.get(`${BASEURL}/api/v1/getSingleUser/${userId}`)
            if (resp.data.success) {
                setUser(resp.data.data)
            } else {
                toast.error("Internal Server error")
            }
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        token = window.localStorage.getItem('token')
        userId = window.localStorage.getItem('userId')
        getSingleUser()
    }, [token, userId])

    return (
        <UserContext.Provider value={{ user, setUser, BASEURL, token, userId, loading }}>
            {children}
        </UserContext.Provider>
    );
};
