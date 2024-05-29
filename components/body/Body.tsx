import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './bodyStyles';
import RecipeCard from '../recipeCard/RecipeCard';

const recipes = [
    {
        name: 'Chicken enchiladas',
        img: 'https://i.pinimg.com/564x/43/ff/2f/43ff2fe3ee234faa7313725adc82cb60.jpg',
    },
    { name: 'Greek meatballs', img: './path/to/image.png' },
    { name: 'Greek meatballs-2', img: './path/to/image.png' },
];

const Body: React.FC = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                renderItem={({ item }) => (
                    <RecipeCard img={item.img} name={item.name} />
                )}
                contentContainerStyle={styles.cardList}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
};

export default Body;
