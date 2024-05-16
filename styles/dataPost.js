import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imagePost: {
        height: 150,
        width: 150,
        marginVertical: 15,
        marginRight: 5,
    }, 
    profileImage: {
        height: 75,
        width: 75,
        borderRadius: 100,
        marginRight: 20,
    },
    contactIcons: {
        width: 20,
        height: 20,
        marginRight: 5,
        resizeMode: 'contain',
    },
    titleProperty: {
        fontFamily: 'Inter-Black', 
        paddingRight: 5,
    },
    containerTitleProperty:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    containerProperty1: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        //marginHorizontal: 10,
    },
    petName: { 
        fontFamily: 'Inter-Black', 
        fontSize: 20, 
    },
    longText: { 
        fontFamily: 'Inter-Regular', 
        fontSize: 13,
    },
    dividerLine: { 
        backgroundColor: 'black',
        height: 1, 
        marginVertical: 10,
    },
    contactContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        marginHorizontal: 5,
    },
    footerButtons: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        margin: 10, 
        borderRadius: 20, 
        padding: 20, 
        backgroundColor: '#D5C59B', 
    },
    footerButton: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        paddingHorizontal: 20,
        height: '100%',
        flex: 1,
    }
});

export default styles;