import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './appStyles';
import Recipes from './screens/recipes/Recipes';
import NewRecipe from './screens/newRecipe/NewRecipe';

function App(): React.JSX.Element {
    return (
        <SafeAreaView style={styles.wrapper}>
            <Recipes />
            <NewRecipe />
            {/* <Groceries /> */}
        </SafeAreaView>
    );
}

export default App;
