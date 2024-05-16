import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    userIDs: {
        width: '100%', 
        flex: 1, 
        marginLeft: 10,
        justifyContent: 'center',
    },
    userIDsText: { 
        width: '100%', 
        fontFamily: 'Inter-Bold', 
    },
    forumTitle:{
        fontFamily: 'Inter-Black',
        fontSize: 18,
        marginTop: 15,
    },
    contentForum: {
        fontFamily: 'Inter-Regular',
        marginBottom: 15,
    },
    imageForum: {
        height: 150,
        width: 150,
        marginBottom: 15,
        marginRight: 5,
    },
    line: {
        height: 1, 
        width: '100%', 
        backgroundColor: 'black',
    },
    iconsForum: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    actionsForum: {
        fontFamily: 'Inter-Regular',
        fontSize: 10,
        paddingLeft: 5,
    },
    forumActions: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    forumAction: {
        width: '33%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    replyProfilePic: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        borderRadius: 100,
        marginRight: 10,
    },
    usernameStyle: {
        fontFamily: 'Inter-Regular', 
        color: 'gray', 
    },
    noRepliesContainer:{ 
        flexDirection: 'row', 
        justifyContent: 'center', 
        paddingTop: 20,
    }
});

export default styles;