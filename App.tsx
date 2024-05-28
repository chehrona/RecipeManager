import React from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { styles } from './appStyles';

function App(): React.JSX.Element {
    const [inputValue, setInputValue] = React.useState('');

    const handleSearch = (inputText: string) => {
        console.log(inputText, 'text');
        setInputValue(inputText);
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.header}>
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
            </View>
        </SafeAreaView>
    );
}

export default App;
