
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/login';
import HomeMemu from '../screens/Home';


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
          name='HomeMenu'
          component={HomeMemu}
            options={{
               
                headerShown:false
            }}
        
          /> 
         
      
             
        </Navigator>
    )
}