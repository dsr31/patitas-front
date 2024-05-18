import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerType: { 
        fontFamily: 'Inter-Black', 
        fontSize: 16, 
        color: '#fff',
    },
    imgPet: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginRight: 15,
    },
    selectedPetCard: { 
        backgroundColor: '#C1AB73', 
        width: '90%', 
        height: '100%', 
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    selectedPetCardContainer: { 
        //backgroundColor: 'red', 
        width: '100%', 
        height: '18%', 
        marginTop: 10, 
        alignItems: 'center',
    },
    selectedPetLabel: {
        backgroundColor: '#4082E4',
        width: '100%',
        fontFamily: 'Inter-Black',
        color: 'white',
        fontSize: 17,
        paddingHorizontal: 10
    },
    selectedPetName: {
        fontFamily: 'Inter-Black',
        fontSize: 24,
        maxWidth: 200
    },
    addImage: {
        width: 85,
        height: 85,
    },
    displayUploadPhotos: {
        flexDirection: 'row',
        //marginBottom: 10,
    },
    searchFormTitle: {
        fontFamily: 'Inter-Black',
        marginBottom: 5,
    },
    titleSpacing:{
        marginTop: 15,
    },
    searchFormInput: { 
        backgroundColor: 'white', 
        width: '100%',
        borderRadius: 30,
        height: 40,
        paddingHorizontal: 20,
    },
    searchFormDate:{
        backgroundColor: 'white', 
        width: '50%',
        borderRadius: 30,
        height: 40,
        paddingHorizontal: 20,
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
        marginVertical: 40,
    },
    modalStyle: { 
        flex: 1, 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(214, 214, 214, 0.8)',
    },
    modalTitle: { 
        backgroundColor: '#C1AB73', 
        width: '100%', 
        paddingHorizontal: 30, 
        paddingVertical: 10, 
        alignItems: 'center', 
        borderTopRightRadius: 40, 
        borderTopLeftRadius: 40,
    },
    modalTitleText: { 
        fontFamily: 'Inter-Black', 
        color: '#fff', 
        fontSize: 15, 
        textAlign: 'center',
    },
    modalButtons: { 
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
    modalButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '100%',
        paddingVertical: 20, 
    },
    modalButtonText: {
        //alignItems: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        textAlign: 'center',
    }
});

export default styles;