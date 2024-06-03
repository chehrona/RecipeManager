import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';

// Components
import NavBar from './components/navBar/NavBar';
import Recipes from './screens/recipes/Recipes';
import NewRecipe from './screens/calendar/Calendar';

import { styles } from './appStyles';
import AddNewButton from './screens/newRecipe/AddNewButton';

enableScreens();

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Tab.Navigator tabBar={(props) => <NavBar {...props} />}>
                    <Tab.Screen
                        name="Recipes"
                        component={Recipes}
                        options={() => ({
                            headerRight: () => <AddNewButton />,
                        })}
                    />
                    <Tab.Screen name="Calendar " component={NewRecipe} />
                    <Tab.Screen name="Groceries" component={NewRecipe} />
                </Tab.Navigator>
            </View>
        </NavigationContainer>
    );
}

export default App;
