import React from 'react';
import { View } from 'react-native';
import { styles } from './bodyStyles';
import RecipeCard from '../recipeCard/RecipeCard';

const recipes = [
    {
        name: 'Chicken enchiladas',
        img: 'https://i.pinimg.com/564x/43/ff/2f/43ff2fe3ee234faa7313725adc82cb60.jpg',
    },
    { name: 'Greek meatballs', img: './path/to/image.png' },
    { name: 'Greek meatballs', img: './path/to/image.png' },
];

function Body(): React.JSX.Element {
    return (
        <View style={styles.container}>
            {recipes.map((recipe, i) => {
                return (
                    <RecipeCard key={i} img={recipe.img} name={recipe.name} />
                );
            })}
        </View>
    );
}

export default Body;
