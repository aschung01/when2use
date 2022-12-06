import React, { useState, useReducer, createContext, useContext, SetStateAction } from "react";

const GroupContext = createContext<GroupContextType | undefined>(undefined);

interface GroupProviderProps {
    children: any;
}

export interface GroupContextType {
    dialogPage: number;
    setDialogPage: React.Dispatch<SetStateAction<number>>;
    newShareableName: string;
    setNewShareableName: React.Dispatch<SetStateAction<string>>;
}

export const GroupProvider = (props: GroupProviderProps) => {
  const [dialogPage, setDialogPage] = useState(0);
  const [newShareableName, setNewShareableName] = React.useState('');
    
    return <GroupContext.Provider value={{dialogPage, setDialogPage, newShareableName, setNewShareableName}}>{props.children}</GroupContext.Provider>;
};

export const useGroupContext = () => {
    return useContext(GroupContext) as GroupContextType;
}