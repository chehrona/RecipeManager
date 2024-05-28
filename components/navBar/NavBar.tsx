import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './navBarStyles';

const NavBar: React.FC = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleSearch = (inputText: string) => {
        console.log(inputText, 'text');
        setInputValue(inputText);
    };

    return <View style={styles.container}></View>;
};

export default NavBar;
