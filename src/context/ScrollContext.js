import { useEffect,createContext,useState  } from "react";

export const ScrollContext = createContext()


export const ScrollContextProvider = ({children}) =>{
    const [scrollContext, setScrollContext] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollContext(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <ScrollContext.Provider value={{scrollContext}}>{children}</ScrollContext.Provider>
    )
}