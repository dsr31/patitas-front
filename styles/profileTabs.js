import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tabsBarContainer: {
        flexDirection: 'row',
    },
    tabBar:{
        width: '33%',
        backgroundColor: '#E2D8BE',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    middleTabIcon: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    profileTabIcon:{
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    activeTab: {
        backgroundColor: '#D5C59B',
    }
});

export default styles;