import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';

import { styles } from '../../appStyles';

const Recipes: React.FC = () => {
    return (
        <SafeAreaView style={styles.recipeContainer}>
            <Header />
            <Body />
        </SafeAreaView>
    );
};

export default Recipes;
