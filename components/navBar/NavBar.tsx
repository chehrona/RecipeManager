import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './navBarStyles';
import NavButton from './NavButton';

const navButtons = [
    { id: 'btn-1', text: 'Recipes', icon: 'utensils' },
    { id: 'btn-2', text: 'Add recipe', icon: 'add' },
    { id: 'btn-3', text: 'Groceries', icon: 'basket-shopping' },
];

const NavBar: React.FC = () => {
    const [isSelected, setIsSelected] = useState<boolean[]>([
        true,
        false,
        false,
    ]);

    const handleViewChange = (index: number) => {
        setIsSelected((prevState) => {
            const newState = [...prevState];
            newState.fill(false);
            newState[index] = true;
            return newState;
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={navButtons}
                renderItem={({ item, index }) => (
                    <NavButton
                        text={item.text}
                        icon={item.icon}
                        index={index}
                        isSelected={isSelected[index]}
                        handleViewChange={handleViewChange}
                    />
                )}
                keyExtractor={(item) => item.id}
            ></FlatList>
        </View>
    );
};

export default NavBar;
