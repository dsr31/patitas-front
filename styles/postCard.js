import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    postCard: {
        marginHorizontal: 16, 
        borderRadius: 20,  
        //backgroundColor: 'red',
        marginBottom: 12,
    },
    postImage: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        borderBottomLeftRadius: 25,
    },
    postContent: {
        flexDirection: 'row',
        width: '100%',
    },
    postInfo: {
        //marginHorizontal: 10,
        flex: 1,
        backgroundColor: 'white',
        borderBottomRightRadius: 25,
    },
    postName: {
        fontFamily: 'Inter-Black',
        fontSize: 15,
        marginHorizontal: 10,
        marginTop: 10,
    },
    postDescription: {
        fontFamily: 'Inter-Regular',
        fontSize: 12,
        marginHorizontal: 10,
    },
    postLocation: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    textLocation: {
        fontFamily: 'Inter-Regular',
        fontSize: 10,
    },
    typePostCard:{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center', 
        //backgroundColor: 'red',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    typePostCardText:{
        fontFamily: 'Inter-Black',
        color: 'white',
        fontSize: 17,
        margin: 5,
    },
    postShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 200,
            height: 250,
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 5, // Requiere elevation en Android para mostrar sombra
    },
    postContainerImage: {
        height: '100', 
        backgroundColor: '#E2D8BE', 
        borderBottomLeftRadius: 25
    }
});

export default styles;