import { createContext, useContext } from "react";


const lodingContext = createContext();

export const useLoading = () => {
    return useContext(lodingContext)
};

export function LoadingProvaider({ value, children }) {
    return (
        <lodingContext.Provider value={value}>
            {children}
        </lodingContext.Provider>
    )
}