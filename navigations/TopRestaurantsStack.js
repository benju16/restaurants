import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TopRestaurants from '../screens/TopRestaurants'

const stack = createStackNavigator()

export default function TopRestaurantsStack() {
    return (
       <stack.Navigator>
           <stack.Screen
           name="top-restaurants"
           component={TopRestaurants}
           options={{ title: "Los Mejores Restaurantes" }}
           />
       </stack.Navigator>
    )
}
