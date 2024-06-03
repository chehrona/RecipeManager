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

const NavButton: React.FC<ButtonProps> = ({ text, icon }) => {
    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.iconWrapper}
            icon={'basket'}
        >
            <Text
                style={{
                    color: isFocused ? '#fbde82' : '#cac9c9',
                }}
            >
                {label}
            </Text>
            <FontAwesome6
                name={icon}
                style={isSelected ? styles.activeIcon : styles.inactiveIcon}
            />
            <Text
                style={{
                    color: isFocused ? '#fbde82' : '#cac9c9',
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default NavButton;
