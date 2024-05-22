import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    reviewCard: {
        backgroundColor: '#fff',
        //height: 150,
        marginHorizontal: 16, 
        borderRadius: 20,  
        marginBottom: 12,
    },
    icon: {
        width: 20,
        height: 20,
        marginHorizontal: 5,
    },
    userInfo:{
        flexDirection: 'row',
        width: '80%',
        alignItems: 'flex-end'
    },
    userRating: {
        flexDirection: 'row',
        width: '20%',
    },
    upperRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    lowerRow: {
        marginHorizontal: 16,
        marginTop: 5,
        marginBottom: 10,
    },
    userInfoText: {
        fontFamily: 'Inter-Regular',
        fontSize: 12,
    },
    userRatingText: {
        fontFamily: 'Inter-Regular',
        fontSize: 13,
    },
    withoutReviews: {
        fontFamily: 'Inter-Regular',
        textAlign: 'center',
        marginTop: 20,
    }
});

export default styles;