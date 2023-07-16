import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "bold",
        fontSize: 40
    },

    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    location: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.red
    },
    cartCount: {
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",
        zIndex: 999
    },
    cartNumber: {
        fontFamily: "regular",
        fontWeight: "600",
        fontSize: 10,
        color: COLORS.lightWhite
    }

})

export default styles