import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './headerStyles';

const Header: React.FC = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleSearch = (inputText: string) => {
        console.log(inputText, 'text');
        setInputValue(inputText);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.viewTitle}>Recipes</Text>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.inputField}
                    value={inputValue}
                    placeholder="Search"
                    onChangeText={handleSearch}
                />
            </View>
        </View>
    );
};

export default Header;
