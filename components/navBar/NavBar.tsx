import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import { styles } from './navBarStyles';

const NavBar: React.FC = () => {
    const [isSelected, setIsSelected] = useState<Boolean[]>([
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
            <TouchableOpacity
                style={styles.iconWrapper}
                onPress={() => handleViewChange(0)}
            >
                <FontAwesome6
                    name={'utensils'}
                    style={
                        isSelected[0] ? styles.activeIcon : styles.inactiveIcon
                    }
                />
                <Text
                    style={
                        isSelected[0]
                            ? styles.iconNameActive
                            : styles.iconNameInactive
                    }
                >
                    Recipes
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconWrapper}
                onPress={() => handleViewChange(1)}
            >
                <FontAwesome6
                    name={'add'}
                    style={
                        isSelected[1] ? styles.activeIcon : styles.inactiveIcon
                    }
                />
                <Text
                    style={
                        isSelected[1]
                            ? styles.iconNameActive
                            : styles.iconNameInactive
                    }
                >
                    Add new
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconWrapper}
                onPress={() => handleViewChange(2)}
            >
                <FontAwesome6
                    name={'basket-shopping'}
                    style={
                        isSelected[2] ? styles.activeIcon : styles.inactiveIcon
                    }
                />
                <Text
                    style={
                        isSelected[2]
                            ? styles.iconNameActive
                            : styles.iconNameInactive
                    }
                >
                    Groceries
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default NavBar;
