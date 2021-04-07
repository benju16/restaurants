import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from '../screens/Account'

const stack = createStackNavigator()

export default function AccountStack() {
    return (
       <stack.Navigator>
           <stack.Screen
           name="account"
           component={Account}
           options={{ title: "Cuenta" }}
           />
       </stack.Navigator>
    )
}
