import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../api/api";
import { AuthContextTask, TaskProps } from "./Task";
import React from "react";





export interface CategoryProps {

    name: string,
    icon: string,

}


interface AuthContextDataProps {
    category?: CategoryProps,
    addCategory?: (id: string, category: CategoryProps) => void,
}

interface AuthContextProviderProps {
    children: ReactNode;

}

export const AuthContextCategory = createContext({} as AuthContextDataProps);

export function AuthContextProviderCateogry({ children }: AuthContextProviderProps) {
    const [category, setCtegory] = useState<CategoryProps>();
    const [select, setSelect] = useState('')
    const { task } = useContext(AuthContextTask);

    async function addCategory(id: string, category: CategoryProps,) {

        if (select === id) {
            await api.post(`/createcategory/${id}`, {

                name: category.name,
                icon: category.icon,

            })

        }


    }

    return (
        <AuthContextCategory.Provider
            value={{
                category,
                addCategory
            }}
        >
            {children}
        </AuthContextCategory.Provider>
    )
}