import React from 'react';
import { View } from 'react-native';

// Components
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';

import { styles } from '../../appStyles';

const Recipes: React.FC = () => {
    return (
        <View style={styles.recipeContainer}>
            <Header />
            <Body />
        </View>
    );
};

export default Recipes;
