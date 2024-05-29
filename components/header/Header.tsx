import React from 'react';
import { View, Text, TextInput } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome';

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
                <FontAwesome6 name={'search'} style={styles.icon} />
                <TextInput
                    value={inputValue}
                    placeholder="Search"
                    onChangeText={handleSearch}
                />
            </View>
        </View>
    );
};

export default Header;
