
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/login';
import Options from '../screens/Options';
import { CreateCategory } from '../screens/CreateCategory';
import Home from '../screens/Home';
import React from 'react';





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
          name='Home'
          component={Home}
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
          <Screen
          name='CreateCategory'
          component={CreateCategory}
          options={{
               
            headerShown:false
          }}
          />
      
         
        </Navigator>
    )
}