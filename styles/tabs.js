import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C1AB73',
    },
    logoHeader: {
        height: 40,
        width: 160, 
        resizeMode: 'contain',
    },
    spacer: {
        flex: 1,
    },
    iconHeader: {
        height: 35, 
        width: 35,
        resizeMode: "contain",
        padding: 0,
        margin: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 23,
        paddingTop: 17,
        paddingBottom: 25,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: '#C1AB73',
        zIndex: 30,
    },
    titlePageSection: {
        backgroundColor: '#D5C59B',
        position: 'absolute',
        top: 50,
        height: 100,
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        zIndex: 2,
    },
    titlePage: {
        fontFamily: 'Inter-Black',
        fontSize: 12,
        marginTop: 72,
    },
    lineSection: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        marginTop: 82,
    },
    lineSectionR: {
        marginRight: 40,
        marginLeft: 13,
    },
    lineSectionL: {
        marginRight: 13,
        marginLeft: 40,
    },
    feed: {
        backgroundColor: '#E2D8BE',
        marginBottom: 180,
    },
    headerFixerProfile: {
        position: 'absolute', 
        backgroundColor: '#E2D8BE', 
        top: 50, 
        height: 65, 
        width: '100%'
    },
    logoProfile:{
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    userIDs: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 8,
    },
    userIDsTextContainer: {
        justifyContent: 'space-between', 
        paddingLeft: 15, 
        paddingVertical: 2,
    },
    userDescriptionTextContainer:{
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    contactButtonsContainer: {
        flexDirection: 'row', 
        width: '100%',
    },
    contactButton: {
        width: '50%', 
        paddingVertical: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    contactButtonBordersRight:{
        borderLeftWidth: 0.5,
    },
    contactButtonBordersLeft: {
        borderRightWidth: 0.5,
    },
    contactInfoIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        paddingRight: 30,
    },
    contactInfoText: {
        fontFamily: 'Inter-Regular',
        fontSize: 10,
    },
    actionButtonsProfileContainerFull: {
        flexDirection: 'row', 
    },
    actionButtonsProfileContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
    },
    actionButtonProfile: {
        borderWidth: 4,
        padding: 5,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#C1AB73',
    },
    actionButtonText: {
        fontFamily: 'Inter-Black',
    }
});

export default styles;