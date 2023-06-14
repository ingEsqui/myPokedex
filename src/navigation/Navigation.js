import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "../screens/Favorite"
import AccountScreen from "../screens/Account"
import PokedexScreen from "../screens/Pokedex"


const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigation>
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
            <Tab.Screen name="Pokedex" component={PokedexScreen} />
        </Tab.Navigation>
    )    
}