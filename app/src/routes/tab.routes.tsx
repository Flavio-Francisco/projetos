import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'




import Login from '../screens/login';
import HomeMemu from '../screens/Options';
import Register from '../screens/register';
import Home from '../screens/Home';
import Options from '../screens/Options';


const{Navigator,Screen} = createMaterialBottomTabNavigator();

export default function Tab() {
    return(
        <Navigator>
         
          <Screen
          name='Login'
          component={Login}
        
          />
               <Screen
          name='Options'
          component={Options}
        
         />
         <Screen
          name='Regster'
          component={Register}
        
          />
         <Screen
          name='Home'
          component={Home}
        
          /> 
        
             
        </Navigator>
    )
}