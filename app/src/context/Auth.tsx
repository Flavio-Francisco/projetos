import React, { useEffect } from "react";
import { ReactNode, SetStateAction, createContext, useState } from "react";
import { api } from "../api/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface AuthUserData {
  token: string
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
  }

}



export interface AuthContextDataProps {
  user: AuthUserData;
  singnIn: (data: AuthUserData) => Promise<void>;
  singnOut: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;

}


export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<AuthUserData>({} as AuthUserData);


  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("userData");

      console.log(storagedUser);

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  }, []);

  console.log(user);


  async function singnIn(data: AuthUserData) {
    if (data) {
      try {
        await AsyncStorage.setItem('userData', JSON.stringify(data));
        setUser(data)

      } catch (error) {
        console.error("Error storing user data in AsyncStorage:", error);
      }

    }


  }
  function singnOut() {

    AsyncStorage.removeItem('userData').catch((error) => {
      console.error("Error removing user data from AsyncStorage:", error);
    })


    setUser({
      token: '',
      user: {
        email: '',
        name: "",
        id: 0,
        password: '',
      },

    });


  }

  return (
    <AuthContext.Provider
      value={{
        singnOut,
        user,
        singnIn
      }}
    >

      {children}
    </AuthContext.Provider>
  )

}