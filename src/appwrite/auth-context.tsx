import { createContext, useContext, useEffect, useState } from "react";
import { ID, Models } from "appwrite";
import { account } from "./config";

export type AuthContextType = {
    user : Models.User<Models.Preferences> | null;
    signUp: (email: string, password: string) => Promise<string | null>;
    signIn: (email: string, password: string) => Promise<string | null>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: {children: React.ReactNode}) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
        null
    )

    const signUp = async (email: string, password: string) => {
        try {
            const userAccount = await account.create(ID.unique(), email, password)
            if(userAccount){
                console.log("Account created successfully!")
            }
            else{
                console.log("Account creation failed!")
            }
            return null;
        }
        catch(error){
            if (error instanceof Error) {
                return error.message;
            }
            return "An occured during signUp"
        }
    }

    const signIn = async (email: string, password: string) => {
        try{
            await account.createEmailPasswordSession(email, password)
            const session = await account.get()
            setUser(session)
            return null
        }
        catch(error){
            if(error instanceof Error){
                return error.message
            }

        return "An error occured during signIn process"
        }
    }

    const signOut = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    }

    return(
        <AuthContext.Provider value={{user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>    
    )
}

export function useAuth() { 
    const context = useContext(AuthContext)
    if (context === undefined){
        throw new Error ("UseAuth must be inside of the Auth Provider!")
    }
    return context
}