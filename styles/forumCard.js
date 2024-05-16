import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    forumCard: {
        marginHorizontal: 16, 
        borderRadius: 20,  
        //backgroundColor: 'red',
        marginBottom: 12,
    },
    forumImage: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        borderBottomLeftRadius: 25,
    },
    forumContent: {
        flexDirection: 'row',
        width: '100%',
    },
    forumInfo: {
        //marginHorizontal: 10,
        flex: 1,
        backgroundColor: 'white',
        borderBottomRightRadius: 25,
        //borderBottomLeftRadius: 25,
    },
    forumInfoNoImage: {
        borderBottomLeftRadius: 25,
    },
    forumName: {
        fontFamily: 'Inter-Black',
        fontSize: 15,
        marginHorizontal: 10,
        marginTop: 10,
    },
    forumDescription: {
        fontFamily: 'Inter-Regular',
        fontSize: 12,
        marginHorizontal: 10,
        paddingTop: 5,
    },
    forumUser: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    textUser: {
        flex: 1,
        fontFamily: 'Inter-Regular',
        fontSize: 10,
        paddingHorizontal: 5,
    },
    titleforumCard:{
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red',
        paddingHorizontal: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    titleforumCardText:{
        fontFamily: 'Inter-Black',
        color: 'white',
        fontSize: 17,
        margin: 5,
    },
    respondingText: {
        color: 'white',
        fontFamily: 'Inter-Regular',
        paddingTop: 6,
        marginBottom: -8,
    },
    forumShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 200,
            height: 250,
        },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 5, // Requiere elevation en Android para mostrar sombra
    },
    forumContainerImage: {
        height: '100', 
        backgroundColor: '#E2D8BE', 
        borderBottomLeftRadius: 25
    }
});

export default styles;