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
    filterContentContainer: { 
        marginTop: 100,
        paddingHorizontal: 25,
    },
    filterContentInfo: {
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        fontFamily: 'Inter-Black',
        fontSize: 16,
    },
    subTitle: { 
        textAlign: 'center', 
        fontFamily: 'Inter-Regular',
        fontSize: 11,
    },
    dividerLine: { 
        backgroundColor: 'black',
        height: 1, 
        marginVertical: 15,
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
        marginBottom: 5,
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
        height: 40,
        paddingHorizontal: 20,
    },
    searchFormTitle: {
        fontFamily: 'Inter-Black',
        marginBottom: 5,
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
    titleSpacing:{
        marginTop: 25,
    },
    displayUploadPhotos: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    addImage: {
        width: 85,
        height: 85,
    }
});

export default styles;