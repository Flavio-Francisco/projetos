import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'




import Login from '../screens/login';
import HomeMemu from '../screens/Home';


const{Navigator,Screen} = createMaterialBottomTabNavigator();

export default function Tab() {
    return(
        <Navigator>
         
          <Screen
          name='Login'
          component={Login}
        
          />
                <Screen
          name='HomeMenu'
          component={HomeMemu}
        
          /> 
             
        </Navigator>
    )
}