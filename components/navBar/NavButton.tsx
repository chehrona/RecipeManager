import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import { styles } from './navBarStyles';

interface ButtonProps {
    index: number;
    text: string;
    icon: string;
    handleViewChange: (index: number) => void;
    isSelected: boolean;
}

const NavButton: React.FC<ButtonProps> = ({
    text,
    icon,
    isSelected,
    index,
    handleViewChange,
}) => {
    return (
        <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => handleViewChange(index)}
        >
            <FontAwesome6
                name={icon}
                style={isSelected ? styles.activeIcon : styles.inactiveIcon}
            />
            <Text
                style={
                    isSelected ? styles.iconNameActive : styles.iconNameInactive
                }
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default NavButton;
