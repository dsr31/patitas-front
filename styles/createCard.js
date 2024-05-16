import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    postCard: {
        height: 88, 
        backgroundColor: '#E2D8BE', 
        marginHorizontal: 16, 
        borderRadius: 20,  
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    postShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 200,
            height: 250,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    imageContainer : {
        backgroundColor: 'green',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginLeft: 20,
        marginRight: 5,
    },
    createImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    createTitle: {
        fontFamily: 'Inter-Black',
        fontSize: 15,
        marginHorizontal: 10,
        color: 'white',
    }
});

export default styles;