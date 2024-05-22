import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    dividerLine: { 
        backgroundColor: 'black',
        height: 1, 
        marginVertical: 15,
    },
    addPhotoSection: {
        alignItems: 'center',
        marginVertical: 10,
    },
    addPhotoText: {
        fontFamily: 'Inter-Black',
        fontSize: 15,
        marginBottom: 10,
    },
    searchButtonContainer: { 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    searchButton: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 220, 
        height: 50, 
        borderWidth: 3, 
        borderRadius: 20,
        backgroundColor: '#C1AB73',
    },
    searchForms: {
        marginBottom: 30,
    },
    searchFormsDouble: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    searchFormsSingle: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchFormComponent: { 
        width: '45%', 
        alignItems: 'center', 
    },
    searchFormInput: { 
        backgroundColor: 'white', 
        width: '100%',
        borderRadius: 30,
    },
    searchFormTitle: {
        fontFamily: 'Inter-Black',
        marginBottom: 5,
    }
});

export default styles;