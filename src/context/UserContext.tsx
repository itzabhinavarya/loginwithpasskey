import React, { useState, useContext, createContext, ReactNode } from 'react';

// Define the type for the user context
interface UserContextType {
    user: any; // Change 'any' to the actual type of user
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
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
