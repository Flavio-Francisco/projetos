import 'react-native-gesture-handler';
import Routes from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {AuthContextProvider } from "./src/context/Auth";
import { AuthContextProviderTask } from "./src/context/Task";
import React from 'react';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      
    <AuthContextProvider>
      <AuthContextProviderTask>
        <Routes/>
        </AuthContextProviderTask>
        </AuthContextProvider>
    </GestureHandlerRootView>
   
  );
}


