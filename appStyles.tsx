import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        backgroundColor: '#fefefe',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        width: '100%',
        paddingTop: 10,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 10,
    },
    viewTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    searchWrapper: {
        width: '100%',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 7,
        paddingLeft: 7,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#e9e5e5',
    },
    inputField: {},
});
