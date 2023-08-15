import { NavigationContainer } from "@react-navigation/native";
import Stack from "./routes/stack.routes";
import { useState } from "react";
import Tab from "./routes/tab.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";



export default function Routes() {

  const [user, setUser]= useState(false)
  return (
    
      <NavigationContainer>
        
        {!user ? <Tab/> : <Stack/> }

        
      </NavigationContainer>
    
  );
}


