import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'




import Login from '../screens/login';
import HomeMemu from '../screens/HomeMeu';
import Register from '../screens/register';
import Home from '../screens/Home';


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
             <Screen
          name='Regster'
          component={Register}
        
          />
        
             
        </Navigator>
    )
}