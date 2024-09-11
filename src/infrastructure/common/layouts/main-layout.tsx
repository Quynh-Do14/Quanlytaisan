import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Foundation from 'react-native-vector-icons/EvilIcons';
const MainLayout = ({ ...props }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Foundation name="navicon" size={32} color="#ffffff" />
                <Image
                    source={require("../../../assets/images/avatar.png")}
                    resizeMode={"contain"}
                    style={{
                        width: 32,
                        height: 32,
                        borderRadius: 50,
                        borderColor: "#ffffff",
                        borderWidth: 2
                    }}
                />
            </View>
            {props.children}
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    content: {
        flex: 1
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 8,
        elevation: 2,
        backgroundColor: "#5f88d3",
    },
    textTitle: {
        color: "#1e1e1e",
        textAlign: "center",
        fontFamily: "Roboto Regular",
        fontWeight: "700",
        fontSize: 20,
    },
    btnStyle: {
        backgroundColor: "#D0FD3E",
        paddingVertical: 16,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textBtnStyle: {
        color: "#000000",
        fontFamily: "Roboto Regular",
        fontSize: 16,
        fontWeight: "900",
    }
})

export default MainLayout