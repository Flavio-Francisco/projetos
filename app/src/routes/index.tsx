import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stack.routes";
import { useContext, useState } from "react";
import Tab from "./tab.routes";
import { AuthContext, AuthContextProvider } from "../context/Auth";




export default function Routes() {
    
  const {user} = useContext(AuthContext)

  
  return (
    <AuthContextProvider>
      <NavigationContainer>
          
          {user ? <Tab/> : <Stack/> }

        </NavigationContainer>
    </AuthContextProvider>
      
    
  );
}


