import { useEffect,createContext,useState  } from "react";

export const LanguageContext = createContext()


export const LanguageContextProvider = ({children}) =>{
    const [languageContext, setLanguageContext] = useState(0);

    return (
        <LanguageContext.Provider value={{languageContext,setLanguageContext}}>{children}</LanguageContext.Provider>
    )
}