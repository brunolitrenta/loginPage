import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface ChoiceProps {
    children: ReactNode
}

interface IChoiceContextData {
    changeContent: number,
    setChangeContent: Dispatch<SetStateAction<number>>
}

const ChoiceContextData = createContext<IChoiceContextData>({} as IChoiceContextData)

export function ChoiceContextProvider({ children }: ChoiceProps) {

    const [changeContent, setChangeContent] = useState<number>(1)

    return (
        <ChoiceContextData.Provider value={{
            changeContent,
            setChangeContent
        }}>
            {children}
        </ChoiceContextData.Provider>
    )
}

export function useChoice() {
    const context = useContext(ChoiceContextData)

    return context;
}