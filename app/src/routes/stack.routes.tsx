
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/login';
import Options from '../screens/Options';




const{Navigator,Screen} =  createStackNavigator();

export default function Stack() {
    return(
        <Navigator>

          <Screen
          name='Login'
          component={Login}
          options={{
               
            headerShown:false
          }}
        
          />
         <Screen
          name='Options'
          component={Options}
          options={{
               
            headerShown:false
          }}
         />
        </Navigator>
    )
}