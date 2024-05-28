import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './appStyles';

// Components
import Header from './components/header/Header.tsx';
import Body from './components/body/Body.tsx';
import NavBar from './components/navBar/NavBar.tsx';

function App(): React.JSX.Element {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Header />
                <Body />
                <NavBar />
            </View>
        </SafeAreaView>
    );
}

export default App;
