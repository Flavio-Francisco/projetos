import { NavigationContainer } from "@react-navigation/native";
import Stack from "./routes/stack.routes";
import { useState } from "react";
import Tab from "./routes/tab.routes";



export default function Routes() {

  const [user, setUser]= useState(false)
  return (
    <NavigationContainer>
      
       {!user ? <Tab/> : <Stack/> }

       
    </NavigationContainer>
  );
}


