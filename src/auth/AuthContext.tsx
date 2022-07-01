import { createContext, useContext } from "react";
import { LoginResponse } from "../api/models/Account";

export interface IAuthContext {
    login: (email: string, password: string) => Promise<LoginResponse>;
    logout: () => void;
}

const placeholderFunc = () => {
    throw new Error("Not implemented.");
};

export const AuthContext = createContext<IAuthContext>({
    login: placeholderFunc,
    logout: placeholderFunc
});

export const useAuth: () => IAuthContext = () => useContext(AuthContext);