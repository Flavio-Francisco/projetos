import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { FontAwesome5,Entypo  } from '@expo/vector-icons'; 

import Register from '../screens/register';
import Login from '../screens/login';


const{Navigator,Screen} = createMaterialBottomTabNavigator();

export default function Tab() {
    return(
        <Navigator>
         
          <Screen
          name='Login'
          component={Login}
          options={{
            tabBarIcon:(()=><Entypo name="login" size={24} color="black" />)
          }}
          
          />
             <Screen
          name='Register'
          component={Register}
          options={{
            tabBarIcon:(()=><FontAwesome5 name="registered" size={24} color="black" />)
          }}
          />   
         
        </Navigator>
    )
}