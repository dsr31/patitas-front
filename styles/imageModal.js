import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(214, 214, 214, 0.8)',
        justifyContent: 'center',
    },
    modalImage:{
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: 'green',
    },
    modalCloseButton:{
        width: '25%',
        backgroundColor: '#C1AB73',
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
    },
    closeText:{
        fontFamily: 'Inter-Black',
    }
});

export default styles;