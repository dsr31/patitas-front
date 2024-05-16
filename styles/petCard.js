import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    petCard: {
        //height: 290, 
        backgroundColor: '#E2D8BE', 
        marginHorizontal: 16, 
        borderRadius: 20,  
        marginBottom: 12,
        alignItems: 'center',
    },
    petShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 200,
            height: 250,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    createImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    upperSection: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
    },
    bottomSection: {
        width: '100%',
    },
    idSection:{
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    idSectionName: {
        fontFamily: 'Inter-Black', 
        fontSize: 20
    },
    idSectionChip: {
        fontFamily: 'Inter-Regular', 
        fontSize: 10, 
        color: 'gray',
    },
    managePet: {
        marginLeft: 10,
        width: '90%',
        flexDirection: 'row',
        alignContent: 'space-around',
        marginVertical: 3,
    },
    manageText: {
        fontFamily: 'Inter-Black',
        width: '100%',
        fontSize: 20,
        margin: 5,
        alignContent: 'space-around',
        paddingLeft: 10,
    },
    infoSection:{
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 10,
    },
    infoSectionLeft:{
        width: '60%',
    },
    infoSectionRight: {
        width: '40%',
    },
    infoSectionDisplay:{
        flexDirection: 'row',
    },
    infoSectionDisplayTitle: {
        fontFamily: 'Inter-Black',
    },
    infoSectionDisplayData:{
        fontFamily: 'Inter-Regular',
        paddingLeft: 5,
    },
    infoSectionDescription: {
        marginHorizontal: 5, 
        marginBottom: 10,
        fontSize: 12,
    }
});

export default styles;