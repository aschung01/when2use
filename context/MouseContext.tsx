import { useState, createContext, useContext, SetStateAction } from "react";

const MouseContext = createContext<MouseContextType | undefined>(undefined);

interface MouseProviderProps {
    children: any;
}

export interface MouseContextType {
    mouseDown: boolean;
    setMouseDown: React.Dispatch<SetStateAction<boolean>>;
}

export const MouseProvider = (props: MouseProviderProps) => {
  const [mouseDown, setMouseDown] = useState(false);
    
    return <MouseContext.Provider value={{mouseDown, setMouseDown}}>{props.children}</MouseContext.Provider>;
};

export const useMouseContext = () => {
    return useContext(MouseContext) as MouseContextType;
}