import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'




import Login from '../screens/login';
import Register from '../screens/register';
import Home from '../screens/Home';
import Options from '../screens/Options';
import { CreateCategory } from '../screens/CreateCategory';
import { AddTask } from '../components/AddTask';


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
          <Screen
          name='CreateCategory'
          component={CreateCategory}
       
           />  
            <Screen
          name='AddTask'
          component={AddTask}
       
           />  
        </Navigator>
    )
}