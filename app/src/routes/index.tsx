import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Stack from "./stack.routes";
import { useContext, useState } from "react";
import Tab from "./tab.routes";
import { AuthContext } from "../context/Auth";
import React from "react";




export default function Routes() {
 
  const {user} = useContext(AuthContext)

  return (
      <NavigationContainer>
          
          {user.user?.id > 0 ? <Tab/> : <Stack/>}

        </NavigationContainer>
      
    
  );
}


