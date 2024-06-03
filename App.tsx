import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './appStyles';
import Recipes from './screens/recipes/Recipes';
import NewRecipe from './screens/newRecipe/NewRecipe';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavBar from './components/navBar/NavBar';
import { enableScreens } from 'react-native-screens';
enableScreens();

const state = [
    { id: 'btn-1', text: 'Recipes', icon: 'utensils' },
    { id: 'btn-2', text: 'Add recipe', icon: 'add' },
    { id: 'btn-3', text: 'Groceries', icon: 'basket-shopping' },
];

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={(props) => <NavBar {...props} />}>
                <Tab.Screen name="Recipes" component={Recipes} />
                <Tab.Screen name="Add new" component={NewRecipe} />
                <Tab.Screen name="Groceries" component={NewRecipe} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
