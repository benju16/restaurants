import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurantes"
                    component={RestaurantsStack}
                    options={{ title: "Restaurantes"}}
                />
                 <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{ title: "favoritos"}}
                />
                 <Tab.Screen
                    name="top-restaurants"
                    component={TopRestaurantsStack}
                    options={{ title: "Top 5"}}
                />
                 <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options={{ title: "Buscar"}}
                />
                 <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{ title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
