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
    },
    deleteButtonPost: { 
        backgroundColor: '#DE5858', 
        marginHorizontal: 20, 
        height: 50, 
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonPostText:{
        fontFamily: 'Inter-Black',
        fontSize: 20,
    },
    modalConfStyle: { 
        flex: 1, 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(214, 214, 214, 0.8)',
    },
    modalConfTitle: { 
        backgroundColor: '#C1AB73', 
        width: '100%', 
        paddingHorizontal: 30, 
        paddingVertical: 10, 
        alignItems: 'center', 
        borderTopRightRadius: 40, 
        borderTopLeftRadius: 40,
    },
    modalConfTitleText: { 
        fontFamily: 'Inter-Black', 
        color: '#fff', 
        fontSize: 15, 
        textAlign: 'center',
    },
    modalConfButtons: { 
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', 
        //paddingHorizontal: 30, 
        //paddingVertical: 20, 
        alignItems: 'center', 
        borderBottomRightRadius: 40, 
        borderBottomLeftRadius: 40,
    },
    modalConfButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        paddingVertical: 20, 
    },
    modalConfButtonText: {
        //alignItems: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        textAlign: 'center',
    }
});

export default styles;