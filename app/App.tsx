import 'react-native-gesture-handler';
import Routes from "./src";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes/>
    </GestureHandlerRootView>
   
  );
}


