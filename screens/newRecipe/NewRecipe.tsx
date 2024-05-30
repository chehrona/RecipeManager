import React from 'react';
import { View } from 'react-native';

// Components
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import NavBar from '../../components/navBar/NavBar';

import { styles } from '../../appStyles';

const NewRecipe: React.FC = () => {
    return (
        <View style={styles.newRecipeContainer}>
            <Header />
            <Body />
            <NavBar />
        </View>
    );
};

export default NewRecipe;
